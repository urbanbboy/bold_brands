'use client';

import { CompanyFeatureItem } from "@/components/molecules/company-feautre-item"
import FeaturesBgSVG from '@/assets/backgrounds/features_bg.svg'
import { Heading } from "@/components/atoms/heading"
import { useGetCompanyServicesQuery } from "@/api/Company"
import { RequestHandler } from "@/components/atoms/request-handler"
import { useEffect, useState } from "react";
import { Spinner } from "@/components/atoms/spinner";

const CompanyFeatures = () => {
    const { data, isLoading, error } = useGetCompanyServicesQuery()
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) return <div className="flex justify-center items-center h-screen"><Spinner /></div>;

    return (
        <section className="w-full max-w-[1320px] m-auto px-5 pb-20">
            <RequestHandler
                isLoading={isLoading}
                error={error}
                data={data}
            >
                <div className="relative flex justify-center items-center py-10 md:py-16 px-4 text-center overflow-hidden">
                    <FeaturesBgSVG className="absolute -z-10 max-w-[1920px] m-auto" />
                    <Heading as="h2">
                        {data?.title}
                    </Heading>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {data?.items.map((feature) => (
                        <CompanyFeatureItem
                            key={feature.title}
                            {...feature}
                        />
                    ))}
                </div>
            </RequestHandler>
        </section>
    )
}

export default CompanyFeatures;