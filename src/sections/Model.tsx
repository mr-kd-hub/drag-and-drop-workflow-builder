import { Button, CardActions, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { INPUT_CARDS, MENU_ENUM } from "../utils";
import CardComponent from "./Card";
interface Props_I {
  open: boolean;
  handleClose: () => void;
}
interface State_I {
  tab: MENU_ENUM;
}
function renderCard(tab:MENU_ENUM, handleClose:any){
    switch(tab){
        case MENU_ENUM.INPUT:
            return <>
            {INPUT_CARDS.map(card=>{
                return <CardComponent name={card.name} description={card.description} id={card.id} handleClose={handleClose} />
            })}
            </>
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
    <Dialog
      open={open}
      fullWidth
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"

      sx={{ width: "100%" ,height:"100%"}}
    >
      <DialogTitle id="alert-dialog-title">Block Library</DialogTitle>
      <DialogContent>
        <div className="flex justify-between h-full w-full">
          <div className="w-[25%] border-r-2 border-dotted">
            <div
              id="sidebar-multi-level-sidebar"
              // className="pr-2"
              aria-label="Sidebar"
            >
              <ul className="space-y-2 font-medium">
                <li>
                  <Button
                    onClick={() => handleTab(MENU_ENUM.INPUT)}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">Input</span>
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => handleTab(MENU_ENUM.TRANSFOMER)}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Transform
                    </span>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[75%] flrx flex-col gap-10 justify-center items-center">
            <Typography variant="h5" className="capitalize flex justify-center w-full items-center p-1">{tab}</Typography>
            <div className="p-4 border-spacing-1">
                {renderCard(tab,handleClose)}
            </div>
          </div>
        </div>
      </DialogContent>
      <CardActions>
        <Button onClick={handleClose} size="small">Close</Button>
      </CardActions>
    </Dialog>
  );
}

export default Model;
