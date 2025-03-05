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
import Link from 'next/link'


export const CompanyPostList = ({ title }: { title?: string }) => {
    const { data, isLoading, error } = useGetCompanyPostsQuery()
    const mobilePosts = data?.items.slice(0, 3)

    return (
        <div className="w-full overflow-x-hidden py-20 bg-background-gray">
            <RequestHandler
                isLoading={isLoading}
                error={error}
                data={data}
            >
                <div className="max-w-[1280px] m-auto flex flex-col lg:flex-row lg:justify-between gap-5 mb-8 px-5 lg:px-0 md:ml-28 lg:mr-20 2xl:mr-0 2xl:ml-44">
                    <Heading as="h2" className={cn(title ? 'w-full' : 'lg:w-3/4')}>{title ? title : data?.title}</Heading>
                    <Link href="/cases" className="flex items-end">
                        <ButtonWithIcon variant="feature">Все кейсы</ButtonWithIcon>
                    </Link>
                </div>
                <div className="px-0">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        plugins={[
                            Autoplay({
                                delay: 8000,
                            })
                        ]}
                        className="w-full hidden md:flex md:ml-28 2xl:ml-44"
                    >
                        <CarouselContent className="w-full gap-4">
                            {data?.items.map((post, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeIn('up', 'spring', idx * 0.2)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={viewportConfig}
                                    transition={staggerTransition(idx)}
                                >
                                    <CarouselItem className="md:basis-1/2 xl:basis-1/3">
                                        <CompanyPostItem {...post} />
                                    </CarouselItem>
                                </motion.div>

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
                </div>
            </RequestHandler>
        </div>
    )
}




