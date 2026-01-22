"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface PaperButtonProps extends React.HTMLAttributes<HTMLElement> {
    href?: string;
    as?: React.ElementType;
    children: React.ReactNode;
}

export default function PaperButton({
    href,
    as,
    className,
    children,
    style,
    ...props
}: PaperButtonProps) {
    const baseClasses =
        "transition-all duration-200 cursor-pointer border-2 border-[#41403e] shadow-[4px_4px_0px_0px_#41403e] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none selection:bg-none font-[family-name:var(--font-patrick-hand)] !no-underline hover:!no-underline after:!content-none before:!content-none";

    const mergedClasses = twMerge(baseClasses, className);

    if (href) {
        return (
            <Link
                href={href}
                className={mergedClasses}
                style={style}
                {...(props as any)}
            >
                {children}
            </Link>
        );
    }

    const Component = as || "button";

    return (
        <Component className={mergedClasses} style={style} {...props}>
            {children}
        </Component>
    );
}
