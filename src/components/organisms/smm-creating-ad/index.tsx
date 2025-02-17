import { Heading } from "@/components/atoms/heading";
import { SubTitle } from "@/components/atoms/sub-title";
import { SmmAdItem } from "@/components/molecules/smm-ad-item";
import { ISmmCreatingAdData } from "@/consts/types";


export const SMMCreatingAd = ({
    eyebrow,
    title,
    sub_title,
    items,
}: ISmmCreatingAdData) => {
    return (
        <div className="w-full max-w-[1920px] flex justify-center px-4 md:px-16 lg:px-40 py-5 md:py-20 bg-[#FAFAFC]">
            <div className="max-w-[1280px] flex flex-col justify-center items-center gap-y-5 lg:gap-y-10">
                <div className="flex flex-col xl:flex-row gap-4">
                    <div>
                        <h5 className="text-gray uppercase">{eyebrow}</h5>
                        <Heading as="h2">{title}</Heading>
                    </div>
                    <SubTitle className="text-md flex items-end max-w-sm">
                        {sub_title}
                    </SubTitle>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <SmmAdItem
                            key={item.title}
                            image={item.image}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
