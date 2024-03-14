import { generateRandom, snachbar_I } from "../utils";
import { AppDispatch, RootState } from "./reducer";
import {
  addEdge,
  addNode,
  getColumns,
  getRows,
  hideMessage,
  removeNode,
  showMessage,
  updateNode,
} from "./slice/slice";
import { Position } from "reactflow";
import { v4 as uuid } from "uuid";

export const addNodeAction = (nodeType: any): any => {
  return (dispatch: AppDispatch, getState: any) => {
    const currentState: RootState = getState();
    let node = currentState.slice.node;
    let nodeId = uuid()//Number(node?.[node?.length - 1]) + 1;
    let nodeDataIndex = Number(node?.[node?.length - 1]) + 1 || 0;
    
    if (!node)
      node = [
        {
          id: nodeId,
          type: nodeType,
          data: { index: nodeDataIndex, nodeId },
          position: { x: generateRandom(), y: generateRandom() },
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
          isStartNode: false,
        },
      ];
    else
      node = [
        ...node,
        {
          id: nodeId,
          type: nodeType,
          data: { index: nodeDataIndex, nodeId },
          position: { x: generateRandom(), y: generateRandom() },
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
          isStartNode: false,
        },
      ];

    return dispatch(addNode(node));
  };
};

export const getColumnsAction = (cols: string[]): any => {
  return (dispatch: AppDispatch) => {
    return dispatch(getColumns(cols));
  };
};

export const getRowsAction = (rows: any[]): any => {
  return (dispatch: AppDispatch) => {
    return dispatch(getRows(rows));
  };
};

export const showMessageAction = (data: snachbar_I): any => {
  return (dispatch: AppDispatch) => {
    const payload = {
      open: true,
      message: data.message,
      variant: data.variant || "infoemation",
    };
    return dispatch(showMessage(payload));
  };
};

export const hideMessageAction = (): any => {
  return (dispatch: AppDispatch) => {
    const payload = {
      open: false,
      message: "",
      variant: "",
    };
    return dispatch(hideMessage(payload));
  };
};


export const addEdgeAction = (newEdge: any): any => {
  return async (dispatch: AppDispatch,getState:any) => {
    // let { edges } = state;
      // let { newEdge } = action.payload;
      const currentState: RootState = getState();
      let edges = currentState.slice.edges;
      let edgeId = (edges?.[edges?.length - 1]?.id + 1 || 0);

      if (!edges)
        edges = [{ id: edgeId, ...newEdge }]
      else {

        if ((newEdge.source === newEdge.target) || (newEdge.sourceHandle === newEdge.target))
          return dispatch(addEdge(edges))

        if (newEdge?.sourceHandle) {
          if (edges?.filter(edge => ((edge.sourceHandle === newEdge.sourceHandle && edge.target === newEdge.target) || edge.sourceHandle === newEdge.sourceHandle))?.length !== 0)
            return dispatch(addEdge(edges))
        }
        else {
          if (edges?.filter(edge => ((edge.source === newEdge.source && edge.target === newEdge.target) || edge.source === newEdge.source))?.length !== 0)
            return dispatch(addEdge(edges))
        }

        edges = [...edges, { id: edgeId, ...newEdge }]
      }
      console.log("edges-----",edges);
      
    dispatch(addEdge(edges));
  };
};

export const updateNodeAction = (updatednode:any):any => {
  return async (dispatch:AppDispatch,getState:any) =>{
    const currentState: RootState = getState();
    let nodes = currentState.slice.node;
    nodes = nodes?.map((obj) => obj.id === updatednode.id ? { ...obj, position: updatednode.position } : obj);
    dispatch(updateNode(nodes));
  }
};

export const removeNodeAction = (nodeType:string, cardIndex:number):any => {
  return (dispatch:AppDispatch,getState:any) => {
    const currentState: RootState = getState();
    let edges = currentState.slice.edges;
    let nodes = currentState.slice.node;
    let deletedNodeId:any = nodes?.filter((obj) => obj.data.nodeId === cardIndex)?.[0]?.id;
    
    edges = edges?.filter((obj) => !(obj.source === deletedNodeId || obj.target === deletedNodeId));
    nodes = nodes?.filter((obj) => obj.data.nodeId !== cardIndex);
    dispatch(removeNode({ nodes, edges }));
  }
}