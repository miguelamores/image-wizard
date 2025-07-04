import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:transform-none shadow-lg",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-emerald-200 focus-visible:ring-emerald-500",
        destructive:
          "bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 shadow-red-200 focus-visible:ring-red-500",
        outline:
          "border-2 border-gray-200 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:border-emerald-300 hover:text-emerald-700 shadow-gray-100 focus-visible:ring-emerald-500",
        secondary:
          "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 shadow-gray-100 focus-visible:ring-gray-500",
        ghost:
          "text-gray-600 hover:bg-gray-100 hover:text-gray-800 shadow-none",
        link: "text-emerald-600 underline-offset-4 hover:underline hover:text-emerald-700 shadow-none",
        gradient:
          "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:from-purple-600 hover:via-pink-600 hover:to-red-600 shadow-purple-200 focus-visible:ring-purple-500",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-13 rounded-lg px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
