import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { addNodeAction } from "../store/action";
import { useDispatch } from "react-redux";
interface Props_I {
  description?: string;
  id: string;
  name: string;
  handleClose:()=>void;
}
function CardComponent(props: Props_I) {
  const { id, name, handleClose } = props;
  const dispatch = useDispatch();
  console.log("id0",id);
  
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
      </CardContent>
    </Card>
  );
}

export default CardComponent;
