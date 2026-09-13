"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, title, children, size = "md" }, ref) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
      return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    if (!isOpen) return null;

    const sizes = {
      sm: "max-w-md",
      md: "max-w-lg",
      lg: "max-w-2xl",
      xl: "max-w-4xl",
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <div
          ref={ref}
          className={cn(
            "relative z-50 w-full rounded-2xl bg-card p-6 shadow-2xl animate-in fade-in zoom-in duration-200",
            sizes[size]
          )}
        >
          {title && (
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-text">{title}</h2>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-text-light transition-colors hover:bg-gray-100 hover:text-text"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

export { Modal };
