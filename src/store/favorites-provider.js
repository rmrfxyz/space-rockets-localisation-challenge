import React, { useEffect, useReducer } from "react";
import FavoritesContext from "./favorites-context";

const reducer = (state, action) => {

  if(action.type === 'ADD_LAUNCH_ITEM'){
    return { launchItems: [action.item, ...state.launchItems], 
      padItems: state.padItems
    }
  }

  if(action.type === 'DEL_LAUNCH_ITEM'){
    return { launchItems: state.launchItems.filter((item) => {
      return item.flight_number != action.id
    }), 
    padItems: state.padItems }
  }

  if(action.type === 'ADD_PAD_ITEM'){
    return { launchItems: state.launchItems,
      padItems: [action.item, ...state.padItems]
    }
  }

  if(action.type === 'DEL_PAD_ITEM'){
    return { launchItems: state.launchItems,
        padItems: state.padItems.filter((item) => {
        return item.id != action.id
      }) 
    }
  }
};

export default ({ children }) => {
  const [favState, dispatchFavAction] = useReducer(reducer, {
    launchItems: JSON.parse(localStorage.getItem("FavoriteLaunches")) || [],
    padItems: JSON.parse(localStorage.getItem("FavoritePads")) || []
  });

  const addItem = (item) => {
    if(item.flight_number){
      dispatchFavAction({ type: 'ADD_LAUNCH_ITEM', item });
    } else {
      dispatchFavAction({ type: 'ADD_PAD_ITEM', item });
    }
  };

  const delItem = (item) => {
    if(item.flight_number){
      dispatchFavAction({ type: 'DEL_LAUNCH_ITEM', id: item.flight_number });
    } else {
      dispatchFavAction({ type: 'DEL_PAD_ITEM', id: item.id });
    }
  };

  useEffect(() => {
    localStorage.setItem("FavoriteLaunches", JSON.stringify(favState.launchItems))
    localStorage.setItem("FavoritePads", JSON.stringify(favState.padItems))
  }, [favState])

  return (
    <FavoritesContext.Provider value={{
      launchItems: favState.launchItems,
      padItems: favState.padItems,
      addItem,
      delItem,
    }}>
      {children}
    </FavoritesContext.Provider>
  )
};
