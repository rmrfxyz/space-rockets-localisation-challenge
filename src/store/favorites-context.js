import { createContext } from "react";

export default createContext({
  launchItems: [],
  padItems: [],
  addItem: (item) => {},
  delItem: (item) => {}
});