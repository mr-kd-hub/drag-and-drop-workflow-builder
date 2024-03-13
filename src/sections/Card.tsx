import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addNodeAction } from "../store/action";
import { useDispatch } from "react-redux";
interface Props_I {
  description: string;
  id: string;
  name: string;
  handleClose:()=>void;
}
function CardComponent(props: Props_I) {
  const { description, id, name, handleClose } = props;
  const dispatch = useDispatch();
  return (
    <Card
      onClick={() => {
        dispatch(addNodeAction(id));
        handleClose()
      }}
      key={id}
      sx={{ minWidth: 275 }}
    >
      <CardContent>
        <Typography variant="h5" component="div" color="text.secondary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
