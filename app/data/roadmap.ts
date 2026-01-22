export type RoadmapNode = {
    id: string;
    label: string;
    description: string;
    slug: string; // references the topic page
    children?: RoadmapNode[];
};

export const CppRoadmap: RoadmapNode[] = [
    {
        id: "basics",
        label: "C++ Basics",
        description: "Start here to learn the fundamentals of C++.",
        slug: "basics",
        children: [
            {
                id: "variables",
                label: "Variables & Types",
                description: "Int, float, char, bool, and more.",
                slug: "variables-types",
            },
            {
                id: "control-flow",
                label: "Control Flow",
                description: "If/else, loops, switch statements.",
                slug: "control-flow",
            },
            {
                id: "functions",
                label: "Functions",
                description: "Defining and calling functions.",
                slug: "functions",
            },
        ],
    },
    {
        id: "memory",
        label: "Memory Management",
        description: "The power and responsibility of C++.",
        slug: "memory-management",
        children: [
            {
                id: "pointers",
                label: "Pointers & References",
                description: "Understanding memory addresses.",
                slug: "pointers",
            },
            {
                id: "stack-heap",
                label: "Stack vs Heap",
                description: "Where your variables live.",
                slug: "stack-vs-heap",
            },
        ],
    },
    {
        id: "oop",
        label: "OOP",
        description: "Object-Oriented Programming concepts.",
        slug: "oop",
        children: [
            {
                id: "classes",
                label: "Classes & Objects",
                description: "The blueprint of objects.",
                slug: "classes",
            },
            {
                id: "inheritance",
                label: "Inheritance",
                description: "Deriving classes from base classes.",
                slug: "inheritance",
            },
            {
                id: "polymorphism",
                label: "Polymorphism",
                description: "Virtual functions and interfaces.",
                slug: "polymorphism",
            },
        ],
    },
    {
        id: "stl",
        label: "STL",
        description: "Standard Template Library.",
        slug: "stl",
        children: [
            {
                id: "containers",
                label: "Containers",
                description: "Vectors, Lists, Maps.",
                slug: "stl-containers",
            },
            {
                id: "algorithms",
                label: "Algorithms",
                description: "Sort, Find, Transform.",
                slug: "stl-algorithms",
            },
        ],
    },
];
