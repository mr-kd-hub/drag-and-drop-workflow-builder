import {  useCallback, useEffect } from "react";
import ReactFlow, {
  addEdge,
  useEdgesState, useNodesState
} from "reactflow";
import "reactflow/dist/style.css";
import {
  MiniMap,
  Controls,
  Background,
} from "reactflow";
import FileUpload from "../components/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import {
  // addEdgeAction,
  updateNodeAction,
} from "../store/action";
import Filter from "../components/Filter";
import Map from "../components/Map";
import Slice from "../components/Slice";

const minimapStyle = {
  height: 120,
};

const nodeColor = (node: any) => {
  switch (node.type) {
    case "FileUpload":
      return "#f9c78b";
    case "filter":
      return "#9eabd7";
    case "map":
      return "#6dcff6";
    case "slice":
      return "#9eabd7";
    default:
      return "#9eabd7";
  }
};
const nodeTypes = {
  FileUpload: FileUpload,
  filter: Filter,
  map: Map,
  slice: Slice,
};
function Workflow() {
  const dispatch = useDispatch();
  const node = useSelector((state: RootState) => state.slice.node);
  const defaultEdges = useSelector((state: RootState) => state.slice.edges);
  console.log("node", node);
  console.log("defaultEdges", defaultEdges);

  // const [nodes, setNodes] = useState<any>(node);
  // const [edges, setEdges] = useState<any>(defaultEdges);
  const [nodes, setNodes, onNodesChange] = useNodesState(node);
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);

console.log("edges",edges);

  useEffect(() => {
    if (node) setNodes(node);
    // if (defaultEdges) setEdges(defaultEdges);
  }, [node, defaultEdges, setEdges, setNodes]);

  // useEffect(() => {
  //   setEdges(
  //     defaultEdges?.map((edge) => ({
  //       ...edge,
  //       type: "custom",
  //       animated: true,
  //       markerEnd: { type: MarkerType.ArrowClosed },
  //       width: 40,
  //     }))
  //   );
  // }, [defaultEdges,setEdges]);

  // const onNodesChange = useCallback(
  //   (changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
  //   [setNodes]
  // );
  // const onEdgesChange = useCallback(
  //   (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // );

  const onConnect = useCallback(
    (connection:any) => setEdges((eds:any) => addEdge(connection, eds)),
    [setEdges]
  );

  const onInit = (reactFlowInstance: any) =>
    console.log("flow loaded:", reactFlowInstance);

  const onNodeDragStop = async (e: any, node: any) => {
    await dispatch(updateNodeAction(node));
  };
  return (
    <>
      <div
        style={{ height: "calc(100vh - 50vh)" }}
        className="w-full h-[75%] border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeDragStop={onNodeDragStop}
          nodeTypes={nodeTypes}
          fitView
          onInit={onInit}
          attributionPosition="top-right"
        >
          <MiniMap
            style={minimapStyle}
            nodeColor={nodeColor}
            nodeStrokeWidth={0}
            zoomable
            pannable
          />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </>
  );
}

export default Workflow;
