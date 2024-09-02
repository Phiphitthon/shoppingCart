"use client";

import { Stack, Typography, Container, Grid } from "@mui/material";
import React from "react";
import ItemCart from "./item-cart";

export default function Home() {
  const [totalItems, setTotalItems] = React.useState(0);
  const [grandTotal, setGrandTotal] = React.useState(0);

  const handleIncrement = (price: number) => {
    setTotalItems(totalItems + 1);
    setGrandTotal(grandTotal + price);
  };

  const handleDecrement = (price: number) => {
    if (totalItems > 0) {
      setTotalItems(totalItems - 1);
      setGrandTotal(grandTotal - price);
    }
  };

  const myItems = [
    { itemname: "iPhone15", price: 32900, image: "http://store.storeimages.cdn-apple.com/8https756/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309?wid=728&hei=666&fmt=png-alpha&.v=1693346853713" },
    { itemname: "iPhone15 Plus", price: 37900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309?wid=728&hei=666&fmt=png-alpha&.v=1693346853713"},
    { itemname: "iPhone15 Pro", price: 41900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309?wid=728&hei=666&fmt=png-alpha&.v=1693346851364" },
    { itemname: "iPhone15 Pro Max", price: 48900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309?wid=728&hei=666&fmt=png-alpha&.v=1693346851364" },
    { itemname: "iPad", price: 13100, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-digitalmat-gallery-1-202210?wid=728&hei=666&fmt=png-alpha&.v=1664392871297" },
    { itemname: "iPad mini", price: 17900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-digitalmat-gallery-1-202111?wid=730&hei=666&fmt=png-alpha&.v=1635183174000" },
    { itemname: "iPad Air", price: 21900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipadair11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1713308648429" },
    { itemname: "iPad Pro", price: 35900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=png-alpha&.v=1713308651643" },
    { itemname: "iMac", price: 48000 , image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac24-digitalmat-gallery-1-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004117"},
    { itemname: "MacBook Air", price: 31400, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-m2-digitalmat-gallery-1-202402?wid=728&hei=666&fmt=png-alpha&.v=1707263976493" },
    { itemname: "MacBook Pro", price: 56200 , image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202310?wid=728&hei=666&fmt=png-alpha&.v=1696971522628"},
    { itemname: "Mac mini", price: 20900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-mini-digitalmat-gallery-1-202301?wid=728&hei=666&fmt=png-alpha&.v=1670038163709"},
    { itemname: "Mac Studio", price: 74900 , image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-studio-digitalmat-gallery-1-202306?wid=728&hei=666&fmt=png-alpha&.v=1683914326094"},
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={4}>
        {myItems.map((item) => (
          <ItemCart
            key={item.itemname}
            itemname={item.itemname}
            itemPrice={item.price}
            image={item.image}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ))}
      </Grid>
      <Stack direction="row" spacing={2} justifyContent="space-between" mt={2}>
        <Typography variant="h5">total:</Typography>
        <Typography variant="h5">
          {grandTotal.toLocaleString()} baht
        </Typography>
      </Stack>
    </Container>
  );
}