export const generateRandom = (min = 80, max = 350) => {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
};

export interface snachbar_I {
  open?: boolean;
  message: string;
  variant?: string;
}

export enum MENU_ENUM {
  INPUT = "input",
  TRANSFOMER = "transfomer",
}

export const INPUT_CARDS = [
  {
    id: "FileUpload",
    name: "File upload",
  },
];

export const TRANSFORM_CARDS = [
  {
    id: "filter",
    name: "Filter",
  },
  {
    id: "map",
    name: "Map",
  },
  {
    id: "slice",
    name: "Slice",
  },
];
export const condition = [
  "exact",
  "not-exact",
  "include",
  "not-include"
]
export const CONDITIONS = (type: string, key: string, val2: any) => {
  switch (type) {
    case "exact":
      return key === val2;
    case "not-exact":
      return key !== val2;
    case "include":
      return [key].includes(val2);
    case "not-include":
      return ![key].includes(val2);
    case null:
    case "":
    case undefined:
      return [null, undefined, ""].includes(key);
  }
};
