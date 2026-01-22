import { TopicContent } from "@/app/data/topics";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // Basic highlight style
import BackButton from "@/app/components/BackButton";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function TopicPage({ params }: PageProps) {
    const { slug } = await params;
    const content = TopicContent[slug];

    if (!content) {
        return (
            <div className="text-center">
                <h1>Topic Not Found</h1>
                <p>This topic hasn't been written yet! Be the first to contribute.</p>
            </div>
        );
    }

    return (
        <div className="paper container">
            <div className="my-4"><BackButton /></div>
            <article className="prose lg:prose-xl max-w-none p-4">
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                    {content}
                </ReactMarkdown>
            </article>

            <div className="border-t-2 border-dashed border-gray-300 my-8 pt-4">
                <p className="text-sm text-gray-500">
                    Authored by <span className="text-blue-500 font-bold">Community</span>
                </p>
            </div>
        </div>
    );
}
