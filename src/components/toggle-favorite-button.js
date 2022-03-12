import React, { useContext } from "react";
import FavoritesContext from '../store/favorites-context';

import {
  Button,
} from "@chakra-ui/core";

export default ({launch}) => {
  const favoritesContext = useContext(FavoritesContext);
  
  let isAlreadyFav = favoritesContext.launchItems.find((elem) => {
    if(!launch || !elem) return false;
    return elem.flight_number === launch.flight_number;
  });
      
  const toggleFavorite = () => {
    console.log('toggle fav launch ', launch)
    console.log('context ', favoritesContext.launchItems)

    if(isAlreadyFav){
      favoritesContext.delLaunchItem(launch.flight_number)
    } else {
      favoritesContext.addLaunchItem(launch)
    }
  };

  return (
    <Button 
      marginTop='auto' 
      marginBottom='auto'
      marginRight='5' 
      onClick={toggleFavorite}
      fontSize="2rem"
    >
      { isAlreadyFav ? '★' : '☆'}
    </Button>  
  ) 
};