import { generateRandom, snachbar_I } from "../utils";
import { AppDispatch, RootState } from "./reducer";
import {
  addNode,
  getColumns,
  getRows,
  hideMessage,
  showMessage,
} from "./slice/slice";
import { Position } from "reactflow";

export const addNodeAction = (nodeType: any): any => {
  return (dispatch: AppDispatch, getState: any) => {
    const currentState: RootState = getState();
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
