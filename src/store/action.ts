import { generateRandom } from "../utils";
import { AppDispatch, RootState, useAppDispatch } from "./reducer";
import { addNode } from "./slice/slice";
import {  Position } from "reactflow";

export const addNodeAction = (nodeType: any): any => {
  return (dispatch: AppDispatch, getState: any) => {
    const currentState = getState();
    let node = currentState.slice.node;
    let nodeId = nodeType + (Number(node?.[node?.length - 1]) + 1 || 0);
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

