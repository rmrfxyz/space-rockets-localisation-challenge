import { createContext } from "react";

export default createContext({
  items: [],
  addItem: item => {},
  delItem: id => {}
});