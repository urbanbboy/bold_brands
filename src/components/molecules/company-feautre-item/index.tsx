import Link from "next/link"
import { Badge } from "@/components/ui/badge";
import { ButtonWithIcon } from "@/components/atoms/button-with-icon";
import Image from "next/image";
export interface FeatureProps {
    title: string;
    tags: { tags: string; }[];
    href?: string;
    image: string;
}

export const CompanyFeatureItem = ({ image, title, href, tags }: FeatureProps) => {
    return (
        <div className="h-full border rounded-2xl shadow-lg flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="w-full h-[250px]  relative overflow-hidden">
                <div className="w-full h-full absolute inset-0">
                    <Image 
                        src={image} 
                        alt={title}
                        fill 
                        className="object-cover"                   
                    />
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="flex items-center my-4 flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge
                            variant={'tag'}
                            key={tag.tags}
                            className=""
                        >
                            {tag.tags}
                        </Badge>
                    ))}
                </div>
                {/* <Link href={href} className="mt-auto">
                    <ButtonWithIcon
                        variant="feature"
                        className="text-accent"
                    >
                        Подробнее
                    </ButtonWithIcon>
                </Link> */}
            </div>
        </div>
    );
};