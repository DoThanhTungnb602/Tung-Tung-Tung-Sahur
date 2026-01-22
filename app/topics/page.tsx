import Link from "next/link";
import { CppRoadmap, RoadmapNode } from "../data/roadmap";
import BackButton from "../components/BackButton";

function TopicList({ nodes }: { nodes: RoadmapNode[] }) {
    return (
        <ul className="list-none pl-4">
            {nodes.map((node) => (
                <li key={node.id} className="mb-2">
                    <Link href={`/topics/${node.slug}`} className="text-blue-600 hover:text-blue-800 underline">
                        {node.label}
                    </Link>
                    {node.children && (
                        <div className="ml-4 border-l-2 border-gray-300 pl-4 mt-2">
                            <TopicList nodes={node.children} />
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default function TopicsIndexPage() {
    return (
        <div>
            <div className="mb-4"><BackButton /></div>
            <h1 className="text-3xl font-bold mb-6">All Topics</h1>
            <TopicList nodes={CppRoadmap} />
        </div>
    );
}
