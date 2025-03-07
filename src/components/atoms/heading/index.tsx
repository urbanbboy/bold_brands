import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { staggerTransition, textVariant, viewportConfig } from "@/lib/motion";

const headingVariants = cva("text-primary font-bold", {
    variants: {
        variant: {
            h1: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
            h2: "text-[32px] md:text-4xl lg:text-5xl leading-9",
            h3: "text-xl md:text-4xl",
            h4: "text-2xl md:text-3xl",
        },
    },
    defaultVariants: {
        variant: "h1",
    },
});

type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4";
    className?: string;
    children: React.ReactNode;
} & VariantProps<typeof headingVariants>;

export const Heading = ({ as: Tag = "h1", className, children }: HeadingProps) => {
    return (
        <motion.div
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            transition={staggerTransition(0)}
        >
            <Tag className={cn(headingVariants({ variant: Tag }), className)}>
                {children}
            </Tag>
        </motion.div>
    )
};


