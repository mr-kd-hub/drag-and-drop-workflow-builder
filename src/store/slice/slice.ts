import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MarkerType, Position } from "reactflow";
import { generateRandom, snachbar_I } from "../../utils";
import { RootState } from "../reducer";
export type ReducerType = {
  flowName:string,
  node: any[],
  edges: any[],
  columns: string[],
  rows:any[],
  snackbar:snachbar_I
}
let initialState:ReducerType = {
  flowName:"",
  node: [],
  columns:[],
  rows:[],
  snackbar:{
    open:false,
    message:"",
    variant:"information"
  },
  // [
  //   {
  //     id: "1",
  //     type: "input",
  //     data: {
  //       label: "Input Node",
  //     },
  //     position: { x: 250, y: 0 },
  //   },
  //   {
  //     id: "2",
  //     data: {
  //       label: "Default Node",
  //     },
  //     position: { x: 100, y: 100 },
  //   },
  //   {
  //     id: "3",
  //     type: "output",
  //     data: {
  //       label: "Output Node",
  //     },
  //     position: { x: 400, y: 100 },
  //   },
  //   {
  //     id: "4",
  //     type: "custom",
  //     position: { x: 100, y: 200 },
  //     data: {
  //       selects: {
  //         "handle-0": "smoothstep",
  //         "handle-1": "smoothstep",
  //       },
  //     },
  //   },
  //   {
  //     id: "5",
  //     type: "output",
  //     data: {
  //       label: "custom style",
  //     },
  //     className: "circle",
  //     style: {
  //       background: "#2B6CB0",
  //       color: "white",
  //     },
  //     position: { x: 400, y: 200 },
  //     sourcePosition: Position.Right,
  //     targetPosition: Position.Left,
  //   },
  //   {
  //     id: "6",
  //     type: "output",
  //     style: {
  //       background: "#63B3ED",
  //       color: "white",
  //       width: 100,
  //     },
  //     data: {
  //       label: "Node",
  //     },
  //     position: { x: 400, y: 325 },
  //     sourcePosition: Position.Right,
  //     targetPosition: Position.Left,
  //   },
  //   {
  //     id: "7",
  //     type: "default",
  //     className: "annotation",
  //     data: {
  //       label:
  //         "On the bottom left you see the  and the bottom right the MiniMap. This is also just a node 🥳",
  //     },
  //     draggable: false,
  //     selectable: false,
  //     position: { x: 150, y: 400 },
  //   },
  // ],
  edges: [],
  // [
  //   { id: "e1-2", source: "1", target: "2", label: "this is an edge label" },
  //   { id: "e1-3", source: "1", target: "3", animated: true },
  //   {
  //     id: "e4-5",
  //     source: "4",
  //     target: "5",
  //     type: "smoothstep",
  //     sourceHandle: "handle-0",
  //     data: {
  //       selectIndex: 0,
  //     },
  //     markerEnd: {
  //       type: MarkerType.ArrowClosed,
  //     },
  //   },
  //   {
  //     id: "e4-6",
  //     source: "4",
  //     target: "6",
  //     type: "smoothstep",
  //     sourceHandle: "handle-1",
  //     data: {
  //       selectIndex: 1,
  //     },
  //     markerEnd: {
  //       type: MarkerType.ArrowClosed,
  //     },
  //   },
  // ],
}
const slice = createSlice({
  name: "test",
  initialState: initialState,
  reducers: {
    addNode: (state, action: PayloadAction<any>) => void(state.node = action.payload),
    getColumns: (state:any, action: PayloadAction<string[]>) => void(state.columns = action.payload),
    getRows: (state:any, action: PayloadAction<any[]>) => void(state.rows = action.payload),
    showMessage:(state:any, action:PayloadAction<snachbar_I>) => void(state.snackbar = action.payload),
    hideMessage:(state:any, action:PayloadAction<snachbar_I>) => void(state.snackbar = action.payload)
  },
});
export const { addNode, getColumns, getRows, showMessage, hideMessage } = slice.actions

export default slice.reducer;
