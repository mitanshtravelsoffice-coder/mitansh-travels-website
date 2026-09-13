import * as React from "react";
import { cn } from "@/lib/utils/cn";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-primary-light focus-visible:ring-primary shadow-lg shadow-primary/20",
      secondary:
        "bg-gold text-white hover:bg-gold-light focus-visible:ring-gold shadow-lg shadow-gold/20",
      outline:
        "border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary",
      ghost:
        "text-primary hover:bg-primary/10 focus-visible:ring-primary",
      gold:
        "bg-gradient-to-r from-gold to-gold-dark text-white hover:from-gold-light hover:to-gold focus-visible:ring-gold shadow-lg shadow-gold/30",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
