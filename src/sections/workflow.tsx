import { useState, useCallback, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import {addNodeAction} from "../store/action"
const minimapStyle = {
    height: 120,
  };
  
// const rfStyle = {
//   backgroundColor: "#B8CEFF",
// };
const nodeTypes = { FileUpload: FileUpload };
function Workflow() {

  const node = useSelector((state:RootState) => state.slice.node)
  const edge = useSelector((state:RootState) => state.slice.edges)
  const dispatch = useDispatch()
  const [nodes, setNodes] = useState<any>(node);
  const [edges, setEdges] = useState<any>(edge);

  useEffect(()=>{
    if(node.length) setNodes(node)
    if(edge.length) setEdges(edge)
  },[node,edge])
  
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
    <>
      <div
        style={{ height: "calc(100vh - 85px)" }}
        className="w-full h-[75%] border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
      >
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
    </>
  );
}

export default Workflow;
