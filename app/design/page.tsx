"use client";

import { useCallback, useState } from "react";
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
    Connection,
    NodeProps,
    Handle,
    Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import clsx from "clsx";
import BackButton from "../components/BackButton";

// --- Custom Sketchy Node for Design ---
function DesignNode({ data }: NodeProps) {
    return (
        <div className={clsx("padding-none")}>
            <Handle type="target" position={Position.Top} className="!bg-black" />
            <div
                className="card"
                style={{
                    minWidth: "150px",
                    margin: 0,
                    border: "2px solid black",
                    boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.1)",
                    backgroundColor: (data.color as string) || "white",
                }}
            >
                <div className="card-body" style={{ padding: "0.5rem" }}>
                    <strong className="text-center block">{data.label as string}</strong>
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} className="!bg-black" />
            <Handle type="source" position={Position.Right} id="r" className="!bg-black" />
            <Handle type="target" position={Position.Left} id="l" className="!bg-black" />
        </div>
    );
}

const nodeTypes = { design: DesignNode };

const initialNodes: Node[] = [
    { id: '1', type: 'design', position: { x: 250, y: 5 }, data: { label: 'Client App', color: '#EAE4E9' } },
    { id: '2', type: 'design', position: { x: 100, y: 150 }, data: { label: 'API Server', color: '#BEE1E6' } },
    { id: '3', type: 'design', position: { x: 400, y: 150 }, data: { label: 'Auth Service', color: '#FAD2E1' } },
    { id: '4', type: 'design', position: { x: 250, y: 300 }, data: { label: 'Database', color: '#FFF1E6' } },
];

const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: 'black' } },
    { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: 'black' } },
    { id: 'e2-4', source: '2', target: '4', style: { stroke: 'black' } },
];

export default function DesignBoard() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: 'black' } }, eds)),
        [setEdges],
    );

    const addNode = (label: string, color: string) => {
        const id = Math.random().toString();
        setNodes((nds) => nds.concat({
            id,
            type: 'design',
            position: { x: Math.random() * 400, y: Math.random() * 400 },
            data: { label, color },
        }));
    };

    return (
        <div style={{ height: "80vh", border: "2px solid #000", position: 'relative' }} className="bg-cream">
            <div className="absolute top-4 left-4 z-10 bg-white p-2 border border-black shadow-md rounded">
                <p className="font-bold mb-2">Toolbox</p>
                <button className="btn-small bg-lavender block w-full mb-1" onClick={() => addNode("Service", "#EAE4E9")}>+ Service</button>
                <button className="btn-small bg-peach block w-full mb-1" onClick={() => addNode("Database", "#FFF1E6")}>+ DB</button>
                <button className="btn-small bg-sky block w-full" onClick={() => addNode("User", "#BEE1E6")}>+ User</button>
            </div>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
            >
                <Background gap={20} color="#888" variant={undefined} />
                <Controls style={{ border: "2px solid black" }} />
                <MiniMap nodeColor="#000" maskColor="rgba(240, 239, 235, 0.6)" style={{ border: "2px solid black" }} />
            </ReactFlow>
        </div>
    );
}
