import { useState } from "react";
import { Handle, Position } from "reactflow";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { parse } from "papaparse";
import { useDispatch, useSelector } from "react-redux";
import { getColumnsAction, getRowsAction, removeNodeAction, showMessageAction } from "../store/action";
import { Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
function FileUpload({data}:any) {
  // const columns = useSelector((state:RootState) => state.slice.columns)
  // const rows = useSelector((state:RootState) => state.slice.rows)
  const dispatch = useDispatch();
  const [files, setFiles] = useState<any>(undefined);
  const handleChange = (event: any) => {
    event.preventDefault();

    const file = event.target.files?.[0];
    if (file) {
      setFiles(file);
      return;
    }
    dispatch(showMessageAction({ message:"No File selecetd", variant:"error" }))
  };
  const handleRun = () => {
    if (files) {
      parse(files, {
        header: true,
        complete: (parsed: any) => {
          const csvData = parsed.data;
          if (csvData.length > 0) {
            // Extract column names from the first row
            const cols: string[] = Object.keys(csvData[0]);
            dispatch(getColumnsAction(cols));
            dispatch(getRowsAction(csvData));
            dispatch(showMessageAction({ message:"File loaded" }))
            setFiles(undefined)
          }
        },
        error: (err: any) => {
          console.error("Error parsing CSV:", err);
          setFiles(undefined)
        },
      });
    }
  };
  const removeNodeControl = async () => {
    await dispatch(removeNodeAction('FileUpload', data.nodeId));
  }
  return (
    <div className="border-1 flex flex-col gap-14 rounded p-16 bg-emerald-300">
      <Handle
        key={`buttonanswer`}
        type="source"
        position={Position.Right}
        className="right-connection"
      />
      <div onClick={() => removeNodeControl()} className="flex w-full items-center">
        <DeleteIcon />
        <Typography className="ml-8">Delete</Typography>
      </div>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        onChange={handleChange}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
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

export default FileUpload;
