"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-text mb-4">Page Not Found</h2>
        <p className="text-text-light text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LinkButton variant="gold" size="lg" href="/">
            <Home className="mr-2 w-5 h-5" />
            Go Home
          </LinkButton>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
