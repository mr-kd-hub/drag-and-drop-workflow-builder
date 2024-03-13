import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

function Output() {
  const columns = useSelector((state: RootState) => state.slice.columns);
  const rows = useSelector((state: RootState) => state.slice.rows);
  //   {
  //     "sr.No": "1",
  //     "Address": "Eldon Base for stackable storage shelf, platinum",
  //     "Name": "Muhammed MacIntyre",
  //     "qty": "3",
  //     "price": "38.94",
  //     "": "35",
  //     "Item": "Storage & Organization"
  // }
  return (
    <div className="h-[25%]">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {!!columns.length &&
                columns.map((col) => {
                  return <TableCell align="right">{col}</TableCell>;
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.length
              ? rows.map((row, index) => {
                  return (
                    <TableRow
                      key={index + String(row[index])}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {Object.values(row).map((value:any) => {
                        return (
                          <TableCell component="th" scope="row">
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
              : "No data found"}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Output;
