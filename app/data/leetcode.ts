export type Problem = {
    id: number;
    title: string;
    difficulty: "Easy" | "Medium" | "Hard";
    category: string;
    link: string;
    completed: boolean;
};

export const CppProblems: Problem[] = [
    { id: 1, title: "Two Sum", difficulty: "Easy", category: "Array", link: "https://leetcode.com/problems/two-sum/", completed: false },
    { id: 2, title: "Add Two Numbers", difficulty: "Medium", category: "Linked List", link: "https://leetcode.com/problems/add-two-numbers/", completed: false },
    { id: 20, title: "Valid Parentheses", difficulty: "Easy", category: "Stack", link: "https://leetcode.com/problems/valid-parentheses/", completed: false },
    { id: 21, title: "Merge Two Sorted Lists", difficulty: "Easy", category: "Linked List", link: "https://leetcode.com/problems/merge-two-sorted-lists/", completed: true },
    { id: 42, title: "Trapping Rain Water", difficulty: "Hard", category: "Array", link: "https://leetcode.com/problems/trapping-rain-water/", completed: false },
    { id: 53, title: "Maximum Subarray", difficulty: "Medium", category: "Array", link: "https://leetcode.com/problems/maximum-subarray/", completed: false },
    { id: 206, title: "Reverse Linked List", difficulty: "Easy", category: "Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", completed: true },
];
