import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, title, subtitle, centered = false, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-24", className)}
        {...props}
      >
        <div className="container mx-auto px-4">
          {(title || subtitle) && (
            <div
              className={cn(
                "mb-12",
                centered ? "text-center" : "text-left"
              )}
            >
              {title && (
                <h2 className="mb-4 text-3xl font-bold text-text md:text-4xl lg:text-5xl">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-lg text-text-light md:text-xl">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
