"use client";

import { usePathname } from "next/navigation";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <>

            {isHomePage ? (
                <main className="min-h-screen">
                    {children}
                </main>
            ) : (
                <main className="container paper my-4 p-4 min-h-[80vh] bg-white">
                    {children}
                </main>
            )}

        </>
    );
}
