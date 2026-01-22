"use client";

import { useCallback, useMemo } from "react";
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    Background,
    Controls,
    MiniMap,
    Node,
    Edge,
    Position,
    Handle,
    NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { CppRoadmap, RoadmapNode } from "../data/roadmap";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import BackButton from "../components/BackButton";

// --- Custom Node Component ---
function SketchyNode({ data }: NodeProps) {
    return (
        <div className={clsx("padding-none", "bg-white")}>
            <Handle type="target" position={Position.Top} className="!bg-black" />
            <div
                className="card"
                style={{
                    width: "200px",
                    margin: 0,
                    border: "2px solid black",
                    boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.1)",
                }}
            >
                <div className="card-body" style={{ padding: "1rem" }}>
                    <h4 className="card-title text-center" style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                        {data.label as string}
                    </h4>
                    <p className="text-sm text-gray-600 text-center" style={{ fontSize: "0.8rem", lineHeight: "1.2" }}>
                        {data.description as string}
                    </p>
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} className="!bg-black" />
        </div>
    );
}

// --- Layout Logic (Simple Tree) ---
function getLayoutElements(rootNodes: RoadmapNode[]) {
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    const NODE_WIDTH = 250;
    const NODE_HEIGHT = 150;

    // Recursively build tree
    // This is a very simple layout:
    // Root at top. Children spaced out below.
    // Using a simplified algorithm:
    // Level 0: x=0, y=0
    // Level 1: Spread out based on count

    let idCounter = 0;

    function traverse(node: RoadmapNode, x: number, y: number, level: number, parentId: string | null) {
        const nodeId = node.id;

        nodes.push({
            id: nodeId,
            type: "sketchy", // Use custom node
            data: { label: node.label, description: node.description, slug: node.slug },
            position: { x, y },
        });

        if (parentId) {
            edges.push({
                id: `e-${parentId}-${nodeId}`,
                source: parentId,
                target: nodeId,
                type: "smoothstep",
                style: { stroke: "black", strokeWidth: 2, strokeDasharray: "5 5" },
                animated: true,
            });
        }

        if (node.children) {
            const totalWidth = node.children.length * NODE_WIDTH;
            const startX = x - totalWidth / 2 + NODE_WIDTH / 2;

            node.children.forEach((child, index) => {
                traverse(child, startX + index * NODE_WIDTH, y + NODE_HEIGHT + 50, level + 1, nodeId);
            });
        }
    }

    // Initial call with roots spaced out
    const totalRootWidth = rootNodes.length * (NODE_WIDTH + 100);
    let startX = -totalRootWidth / 2;

    rootNodes.forEach((node) => {
        traverse(node, startX, 0, 0, null);
        startX += NODE_WIDTH + 100; // Extra spacing for separate trees
    });

    return { nodes, edges };
}


export default function RoadmapPage() {
    const router = useRouter();
    const { nodes: initialNodes, edges: initialEdges } = useMemo(() => getLayoutElements(CppRoadmap), []);

    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
        if (node.data.slug) {
            router.push(`/topics/${node.data.slug}`);
        }
    }, [router]);

    const nodeTypes = useMemo(() => ({ sketchy: SketchyNode }), []);

    return (
        <div style={{ height: "80vh", border: "2px solid #000" }} className="bg-cream">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodeClick={onNodeClick}
                nodeTypes={nodeTypes}
                fitView
                attributionPosition="bottom-right"
            >
                <Background color="#888" gap={16} size={1} />
                <Controls style={{ border: "2px solid black", boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.1)" }} />
            </ReactFlow>
        </div>
    );
}
