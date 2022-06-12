import { useState } from "react";
import { useQuery } from "react-query";

// Components
import { Drawer, LinearProgress, Grid, Badge } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

//Styles
import { Wrapper } from "./App.styles";

//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}


const getProducts = async (): Promise<CartItemType[]> => 
  await(await fetch('https://fakestoreapi.com/products')).json()  //first awai for the json() and the secong one for the fetch.



const  App = () => {
  const {data, isLoading, error } = useQuery<CartItemType[]>('products',getProducts );

  const getTotalItems = () => null;

  const handleAddToCart = () => null;

  const handleRemoveFromCart = () => null;


  if (isLoading) return <LinearProgress />
  if(error)  return <div>Something went wrong ....</div>

  return (
    <div className="App">
      Start
    </div>
  );
}

export default App;
