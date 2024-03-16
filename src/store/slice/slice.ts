import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { snachbar_I } from "../../utils";
export type ReducerType = {
  flowName:string,
  node: any[],
  edges: any[],
  columns: string[],
  rows:any[],
  snackbar:snachbar_I,
  saved:object[]
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
  edges: [],
  saved:[]
}
const slice = createSlice({
  name: "test",
  initialState: initialState,
  reducers: {
    addNode: (state, action: PayloadAction<any>) =>
      void (state.node = action.payload),
    getColumns: (state: any, action: PayloadAction<string[]>) =>
      void (state.columns = action.payload),
    getRows: (state: any, action: PayloadAction<any[]>) =>
      void (state.rows = action.payload),
    showMessage: (state: any, action: PayloadAction<snachbar_I>) =>
      void (state.snackbar = action.payload),
    hideMessage: (state: any, action: PayloadAction<any>) =>
      void (state.snackbar = action.payload),
    addEdge: (state: any, action: PayloadAction<any>) =>
      void (state.edges = action.payload),
    updateNode: (state: any, action: PayloadAction<any>) =>
      void (state.node = action.payload),
    removeNode: (state: any, action: PayloadAction<any>) => {
      state.node = action.payload.nodes;
      state.edges = action.payload.edges;
    },
    saveWorkflow: (state:any, action: PayloadAction<any>) => state.saved = action.payload
  },
});
export const { addNode, getColumns, getRows, showMessage, hideMessage, addEdge,updateNode,removeNode, saveWorkflow } = slice.actions

export default slice.reducer;
