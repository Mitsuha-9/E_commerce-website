import React from 'react';
import { Typography, Button, Grid } from '@mui/material';

const CartPage = ({ cart }) => {
  // Calculate the total price
  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.product.amount), 0);

  return (
    <Grid container sx = {{marginTop: 20}}>
      <Grid item xs={12}>
        <Typography variant="h4">Cart</Typography>
      </Grid>
      <Grid item xs={12}>
        {cart.map((item) => (
          <div key={item.id}>
            <Typography>{item.product_id}</Typography>
            <Typography>{item.amount}</Typography>
            <hr />
          </div>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Total Price: ${totalPrice.toFixed(2)}</Typography>
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartPage;
