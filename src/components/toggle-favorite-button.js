import React, { useContext } from "react";
import FavoritesContext from '../store/favorites-context';

import {
  Button,
} from "@chakra-ui/core";

export default ({item}) => {
  const favoritesContext = useContext(FavoritesContext);
  
  let isAlreadyFav;
  
  if(item && item.flight_number){
    isAlreadyFav = favoritesContext.launchItems.find((launch) => {
      if(!item || !launch) return false;
      return item.flight_number === launch.flight_number;
    });
  } else if(item && item.id) {
    isAlreadyFav = favoritesContext.padItems.find((pad) => {
      if(!item || !pad) return false;
      return item.id === pad.id;
    });
  }
      
  const toggleFavorite = () => {
    if(isAlreadyFav){
      favoritesContext.delItem(item)
    } else {
      favoritesContext.addItem(item)
    }
  };

  return (
    <Button 
      marginTop='auto' 
      marginBottom='auto'
      onClick={toggleFavorite}
      fontSize="2rem"
    >
      { isAlreadyFav ? '★' : '☆'}
    </Button>  
  ) 
};