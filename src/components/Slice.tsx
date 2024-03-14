import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Handle, Position } from "reactflow";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeNodeAction } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import { condition } from "../utils";
import { RootState } from "../store/reducer";

function Map({data}:any) {
  const dispatch = useDispatch();
  const rows = useSelector((state:RootState) => state.slice.rows)
  const columns = useSelector((state:RootState) => state.slice.columns)

  const handleRun = () => {
    return rows.map(item=> item)
  };
  const removeNodeControl = async() => {
    await dispatch(removeNodeAction('slice', data.nodeId));
  }
  return (
    <div className="border-1 flex flex-col gap-14 rounded p-16 bg-cyan-700">
      <Handle
        key={`buttonanswer`}
        type="source"
        position={Position.Left}
        className="right-connection"
      />
      <Handle
        key={`buttonanswer`}
        type="source"
        position={Position.Right}
        className="right-connection"
      />
      <div
        onClick={() => removeNodeControl()}
        className="flex w-full items-center"
      >
        <DeleteIcon />
        <Typography className="ml-8">Delete</Typography>
      </div>
      <Typography>Slice</Typography>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={columns}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Column" />}
      />
       <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={condition}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Conditions" />}
      />
      <Button
        onClick={handleRun}
        fullWidth
        color="secondary"
        variant="outlined"
      >
        Run
      </Button>
    </div>
  );
}

export default Map;
