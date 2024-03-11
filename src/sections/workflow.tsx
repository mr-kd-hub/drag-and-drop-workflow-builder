import { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import FileUpload from "../components/FileUpload";

const minimapStyle = {
    height: 120,
  };
  
const rfStyle = {
  backgroundColor: "#B8CEFF",
};
const nodeTypes = { FileUpload: FileUpload };
function Workflow() {
  const initialNodes = [
    { id: "node-1", type: "FileUpload", position: { x: 0, y: 0 }, data: {} },
    { id: "node-2", type: "FileUpload", position: { x: 0, y: 0 }, data: {} },
  ];
  const [nodes, setNodes] = useState<any>(initialNodes);
  const [edges, setEdges] = useState<any>([]);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: any) => setEdges((eds: any) => addEdge(connection, eds)),
    [setEdges]
  );
  const onInit = (reactFlowInstance:any) => console.log('flow loaded:', reactFlowInstance);

  return (
    <div style={{ height: "100vh", width: "100-vh" }} className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        onInit={onInit}
        attributionPosition="top-right"
      >
        <MiniMap style={minimapStyle} zoomable pannable />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}

export default Workflow;
