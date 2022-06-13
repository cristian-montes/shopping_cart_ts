import { useState } from "react";
import { useQuery } from "react-query";

// Components
import { Grid, LinearProgress} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import Item from "./Item/Item";

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

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;


  if (isLoading) return <LinearProgress />
  if(error)  return <div>Something went wrong ....</div>

  return (
    <Wrapper>
      <Grid container spacing={40}>
        {data?.map( item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
