"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { RoughNotation } from "react-rough-notation";

const navItems = [
    { name: "Roadmap", href: "/roadmap", color: "#FAD2E1" }, // Pink
    { name: "Topics", href: "/topics", color: "#FFF1E6" },   // Peach
    { name: "Quiz", href: "/quiz", color: "#BEE1E6" },       // Sky
    { name: "Design", href: "/design", color: "#CDDAFD" },   // Blue
    { name: "LeetCode", href: "/leetcode", color: "#E2ECE9" }, // Mint
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="border split-nav bg-lavender">
            <div className="nav-brand">
                <h3>
                    <Link href="/">C++ Learning</Link>
                </h3>
            </div>
            <div className="collapsible">
                <input id="collapsible1" type="checkbox" name="collapsible1" />
                <label htmlFor="collapsible1">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </label>
                <div className="collapsible-body">
                    <ul className="inline">
                        {navItems.map((item) => {
                            const isActive = pathname.startsWith(item.href);
                            return (
                                <li key={item.href}>
                                    <Link href={item.href}>
                                        <RoughNotation
                                            type="underline"
                                            show={isActive}
                                            color={item.color}
                                            strokeWidth={3}
                                        >
                                            {item.name}
                                        </RoughNotation>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
