import {
  Button,
  CardActions,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import { INPUT_CARDS, MENU_ENUM, TRANSFORM_CARDS } from "../utils";
import CardComponent from "./Card";
interface Props_I {
  open: boolean;
  handleClose: () => void;
}
interface State_I {
  tab: MENU_ENUM;
}
function renderCard(tab: MENU_ENUM, handleClose: any) {
  switch (tab) {
    case MENU_ENUM.INPUT:
      return (
        <>
          {INPUT_CARDS.map((card) => {
            return (
              <CardComponent
                name={card.name}
                // description={card.description}
                id={card.id}
                handleClose={handleClose}
              />
            );
          })}
        </>
      );
    case MENU_ENUM.TRANSFOMER:
      return (
        <div className="flex flex-col gap-4">
          {TRANSFORM_CARDS.map((card) => {
            return (
              <CardComponent
                name={card.name}
                id={card.id}
                handleClose={handleClose}
              />
            );
          })}
        </div>
      );
  }
}
function Model(props: Props_I) {
  const { open, handleClose } = props;
  const [state, setState] = useState<State_I>({
    tab: MENU_ENUM.INPUT,
  });
  const { tab } = state;
  const handleTab = (tab: MENU_ENUM) => {
    setState({ ...state, tab });
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      anchor="right"
      sx={{ width: "50%", height: "100%" }}
    >
      <DialogTitle id="alert-dialog-title">Block Library</DialogTitle>
      <DialogContent>
        <div className="flex justify-between h-full w-full">
          <div className="border-r-2 border-dotted">
            <List>
              {[MENU_ENUM.INPUT, MENU_ENUM.TRANSFOMER].map((text, index) => (
                <ListItem
                  onClick={() => handleTab(text)}
                  key={text}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
          <div className="w-[75%] flrx flex-col gap-10 justify-center items-center">
            <Typography
              variant="h5"
              className="capitalize flex justify-center w-full items-center p-1"
            >
              {tab}
            </Typography>
            <div className="p-4 border-spacing-1">
              {renderCard(tab, handleClose)}
            </div>
          </div>
        </div>
      </DialogContent>
      <CardActions>
        <Button onClick={handleClose} size="small">
          Close
        </Button>
      </CardActions>
    </Drawer>
  );
}

export default Model;
