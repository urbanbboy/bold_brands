import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                carousel: "bg-white/20 p-4 rounded-md hover:bg-white/40 border-none",
                review: "bg-slate-200 hover:bg-slate-300 rounded-xl",
                clean: "",
                primary: "bg-accent text-accent-foreground hover:bg-accent-hover disabled:bg-graphic-gray disabled:text-gray",
                secondary: "border bg-transparent border-black text-primary hover:bg-graphic-dark hover:text-secondary disabled:border-graphic-gray disabled:text-gray",
                ghost: "bg-tranparent border-graphic-dark text-primary disabled:text-gray ",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
                clean: ''
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    iconColor?: string;
    ariaLabel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ariaLabel = 'Применить', ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                aria-label={ariaLabel}
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
