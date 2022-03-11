import React, { useReducer } from "react";
import FavoritesContext from "./favorites-context";

const reducer = (state, action) => {

  console.dir(state)
  console.dir(action)

  if(action.type == 'ADD_LAUNCH_ITEM'){
    console.log('ADD_LAUNCH_ITEM')
  }

  if(action.type == 'DEL_LAUNCH_ITEM'){
    console.log('DEL_LAUNCH_ITEM')
  }
};

export default ({ content }) => {
  const [favState, dispatchFavAction] = useReducer(reducer, {
    launchItems: [],
    padItems: []
  });

  const addLaunchItem = (item) => {
    dispatchFavAction({ type: 'ADD_LAUNCH_ITEM', item });
  };

  const delLaunchItem = (item) => {
    dispatchFavAction({ type: 'DEL_LAUNCH_ITEM', id });
  };

  return (
    <FavoritesContext.Provider value={{
      launchItems: favState.launchItems,
      padItems: favState.padItems,
      addLaunchItem,
      delLaunchItem,
    }}>
      {content}
    </FavoritesContext.Provider>
  )
};
