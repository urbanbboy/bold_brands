'use client';

import { useGetCompanyPostsQuery } from '@/api/Company';
import TikTok from '@/assets/posts/tiktok.svg'
import { ButtonWithIcon } from '@/components/atoms/button-with-icon'
import { Heading } from '@/components/atoms/heading'
import { RequestHandler } from '@/components/atoms/request-handler';
import { CompanyPostItem } from '@/components/molecules/company-post-item'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { fadeIn, staggerTransition, viewportConfig } from '@/lib/motion';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link'


export const CompanyPostList = ({ title }: { title?: string }) => {
    const { data, isLoading, error } = useGetCompanyPostsQuery()
    const mobilePosts = data?.items.slice(0, 3)
    const t = useTranslations("ThreePost");

    return (
        <div className="w-full overflow-x-hidden py-20 bg-background-gray">
            <RequestHandler
                isLoading={isLoading}
                error={error}
                data={data}
            >
                <div className="max-w-[1280px] m-auto flex flex-col lg:flex-row lg:justify-between gap-5 mb-8 px-5">
                    <Heading as="h2" className={cn(title ? 'w-full max-w-[1186px]' : 'lg:w-3/4 w-full max-w-[1186px] lg:text-4xl xl:text-5xl')}>{title ? title : data?.title}</Heading>
                    <Link href="/cases" className="flex items-end">
                        <ButtonWithIcon variant="feature">{t('btn')}</ButtonWithIcon>
                    </Link>
                </div>
                <motion.div
                    variants={fadeIn('up', 'spring', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportConfig}
                    transition={staggerTransition(0)}
                    className="px-0"
                >
                    <Carousel
                        opts={{
                            align: "end",
                        }}
                        plugins={[
                            Autoplay({
                                delay: 8000,
                            })
                        ]}
                        className="hidden md:flex overflow-hidden"
                    >
                        <CarouselContent className="gap-4 md:ml-28">
                            {data?.items.map((post, idx) => (
                                <CarouselItem key={idx} className="md:basis-1/2 xl:basis-2/5">
                                    <CompanyPostItem {...post} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="flex flex-col md:hidden px-5">
                        {mobilePosts?.map((post, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeIn('up', 'spring', idx * 0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={viewportConfig}
                                transition={staggerTransition(idx)}
                            >
                                <CompanyPostItem {...post} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </RequestHandler>
        </div>
    )
}




