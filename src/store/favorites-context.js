import { createContext } from "react";

export default createContext({
  launchItems: [],
  addItem: (item) => {},
  delItem: (id) => {}
});