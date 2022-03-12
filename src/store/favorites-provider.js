import React, { useReducer } from "react";
import FavoritesContext from "./favorites-context";

const reducer = (state, action) => {

  console.dir(state)
  console.dir(action)

  if(action.type === 'ADD_LAUNCH_ITEM'){
    console.log('ADD_LAUNCH_ITEM', [...state.launchItems, action.item])
    return { launchItems: [action.item, ...state.launchItems]}
  }

  if(action.type === 'DEL_LAUNCH_ITEM'){
    console.log('DEL_LAUNCH_ITEM', action)
    return { launchItems: state.launchItems.filter((item) => {
      return item.flight_number != action.id
    }) }
  }
};

export default ({ children }) => {
  const [favState, dispatchFavAction] = useReducer(reducer, {
    launchItems: [],
    padItems: []
  });

  const addLaunchItem = (item) => {
    dispatchFavAction({ type: 'ADD_LAUNCH_ITEM', item });
  };

  const delLaunchItem = (id) => {
    dispatchFavAction({ type: 'DEL_LAUNCH_ITEM', id });
  };

  return (
    <FavoritesContext.Provider value={{
      launchItems: favState.launchItems,
      padItems: favState.padItems,
      addLaunchItem,
      delLaunchItem,
    }}>
      {children}
    </FavoritesContext.Provider>
  )
};
