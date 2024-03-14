import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Handle, Position } from "reactflow";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeNodeAction } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import { CONDITIONS, condition } from "../utils";
import { RootState } from "../store/reducer";

function Filter({data}:any) {
  const dispatch = useDispatch();
  const rows = useSelector((state:RootState) => state.slice.rows)
  const columns = useSelector((state:RootState) => state.slice.columns)

  console.log("data",data);
  
 /* The commented out `handleRun` function is a function that takes in a `key` (presumably a column
 name) and a `condition` (such as "equals", "contains", etc.). It then uses the `rows` array from
 the Redux state and filters it based on the provided `key` and `condition` using the `CONDITIONS`
 function from the `utils` file. */
  const handleRun = (key:string, condition:string) => {
    return rows.filter(item=> CONDITIONS(condition,key,item))
  };
  const removeNodeControl = async() => {
    await dispatch(removeNodeAction('filter', data.nodeId));
  }
  return (
    <div className="border-1 flex flex-col gap-14 rounded p-16 bg-sky-600">
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
      <Typography>Filter</Typography>
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
        // onClick={handleRun}
        fullWidth
        color="secondary"
        variant="outlined"
      >
        Run
      </Button>
    </div>
  );
}

export default Filter;
