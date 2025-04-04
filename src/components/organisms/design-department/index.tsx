"use client";

import { MarketingChapter } from "@/components/molecules/marketing-department-chapter";
import MarketingDepartmentBg from "@/assets/backgrounds/marketing_department.svg";
import { Heading } from "@/components/atoms/heading";
import { useGetDesignSupportQuery } from "@/api/Marketing";
import { RequestHandler } from "@/components/atoms/request-handler";


export const DesignDepartment: React.FC = () => {
    const { data, isLoading, error } = useGetDesignSupportQuery();

    return (
        <section
            aria-labelledby="marketing-department"
            className="relative flex justify-center p-4 md:px-16 lg:px-40"
        >
            <MarketingDepartmentBg
                id="marketing-department"
                className="absolute top-3/4 md:top-32 left-0 -z-50 max-w-[1920px]"
            />
            <div className="flex flex-col gap-y-16 w-full max-w-[1280px] py-14 md:py-36">
                <RequestHandler isLoading={isLoading} error={error} data={data}>
                    <div
                        className="flex flex-col md:flex-row gap-y-5 gap-x-10"
                    >
                        <Heading as="h2">{data?.title}</Heading>
                        <p className="flex items-end text-gray2 text-lg lg:text-2xl">
                            {data?.sub_title}
                        </p>
                    </div>
                    {/* Главы */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {data?.chapters.map((chapter, idx) => (
                            <MarketingChapter
                                key={idx}
                                number={chapter.number}
                                title={chapter.title}
                            />
                        ))}
                    </div>
                </RequestHandler>
            </div>
        </section>
    );
};
