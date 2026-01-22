export type QuizQuestion = {
    id: string;
    question: string;
    options: string[];
    answer: string; // The correct option
    explanation: string;
};

export const CppQuiz: QuizQuestion[] = [
    {
        id: "q1",
        question: "What is the correct syntax to output 'Hello World' in C++?",
        options: [
            "print('Hello World');",
            "Console.WriteLine('Hello World');",
            "cout << 'Hello World';",
            "System.out.println('Hello World');",
        ],
        answer: "cout << 'Hello World';",
        explanation: "`cout` is used in C++ to output text to the console, used with the insertion operator `<<`.",
    },
    {
        id: "q2",
        question: "Which data type is used to create a variable that should store text?",
        options: ["string", "String", "Txt", "myString"],
        answer: "string",
        explanation: "In C++, `string` is the standard class for handling text.",
    },
    {
        id: "q3",
        question: "How do you create a variable with the numeric value 5?",
        options: ["num x = 5", "x = 5;", "int x = 5;", "float x = 5;"],
        answer: "int x = 5;",
        explanation: "`int` is the keyword for integer variables.",
    },
    {
        id: "q4",
        question: "Which operator can be used to compare two values?",
        options: ["<>", "==", "=", "><"],
        answer: "==",
        explanation: "`==` is the equality operator. on the other hand `=` is the assignment operator.",
    },
];
