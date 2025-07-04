import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border-2 border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-3 text-sm font-medium transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:border-emerald-500 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm hover:shadow-md focus:shadow-lg",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
