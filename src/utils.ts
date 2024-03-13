import { Description } from "@mui/icons-material";

export const generateRandom = (min = 80, max = 350) => {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }

export interface snachbar_I  {
  open?:boolean;
  message:string;
  variant?:string
}

export enum MENU_ENUM {
  INPUT = "input",
  TRANSFOMER = "transfomer"
}

export const INPUT_CARDS = [
  {
    id:"FileUpload",
    name:"FileUpload",
    description:"Handle csv"
  }
]