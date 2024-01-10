import { Typography, Button,Grid} from '@mui/material'
import React, {useEffect, useState} from 'react'
import { Image } from 'mui-image'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../Hooks/AuthProvider'

export default function ProductDetailPage() {

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [cart, setCart] = useState([]);
    const {user} = useAuth();
    
    useEffect(() => {
        fetch(`http://localhost:3000/product/${productId}`)
          .then((res) => res.json())
          .then((data) => setProduct(data));
    }, [productId]);


    const addToCart = (product) => {

        const cartItem = {
            user: user.token,          // Pass user ID or user object based on your setup
            product_id: product._id,    // Assuming your product object has an 'id' property
            amount: product.amount
        };

        console.log('Adding to cart:', cartItem);
        axios.post('http://localhost:3000/cartapi/cart', cartItem)
            .then((response) => {
                console.log('Response:', response);
                setCart([...cart, product]);
            })
            .catch(err => console.log('Error:', err));
    };

    return (
    <>
    {/* <Navbar/> */}
    <Grid container sx ={{margin: 20}}>
        <Grid item sx = {{paddingRight:20}}>
            <Image src={product.image} width={500} height={400} fit='cover'/>
        </Grid>
        <Grid item>
            <Grid container sx ={{flexDirection: 'column'}}>
                <Grid item>
                    <Typography>{product.title}</Typography>
                    <Typography>{product.description}</Typography>
                    <Typography>{product.amount}</Typography>
                </Grid>
                <Grid item>
                    <Button>Buy Now</Button>
                    <Button onClick={() => addToCart(product)}>Add to Cart</Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </>
  )
}
