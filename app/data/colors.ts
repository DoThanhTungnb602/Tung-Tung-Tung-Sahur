export interface StickyNote {
    title: string;
    href: string;
    color: string;
    rotate: string;
}

export const FEATURE_COLORS: Record<string, string> = {
    "/roadmap": "#EAE4E9", // lavender
    "/quiz": "#BEE1E6",    // sky
    "/design": "#FFF1E6",  // peach
    "/leetcode": "#E2ECE9", // mint
    "/topics": "#FAD2E1",   // pink
};

export const STICKY_NOTES: StickyNote[] = [
    {
        title: "Maps",
        href: "/roadmap",
        color: FEATURE_COLORS["/roadmap"],
        rotate: "-rotate-2",
    },
    {
        title: "Quiz",
        href: "/quiz",
        color: FEATURE_COLORS["/quiz"],
        rotate: "rotate-1",
    },
    {
        title: "Design",
        href: "/design",
        color: FEATURE_COLORS["/design"],
        rotate: "-rotate-1",
    },
    {
        title: "LeetCode",
        href: "/leetcode",
        color: FEATURE_COLORS["/leetcode"],
        rotate: "rotate-2",
    },
    {
        title: "Docs",
        href: "/topics",
        color: FEATURE_COLORS["/topics"],
        rotate: "rotate-3",
    }
];
