import React, {useState, useEffect} from 'react'
import {Grid} from '@mui/material'
import CustomCard from './CustomCard'
import axios from 'axios'
// import ProductsData from '../ProductsData'

export default function CardPage() {

  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get("http://localhost:3000/product/products") 
           .then((response) => setData(response.data));
  }
  
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
    <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx = {{marginTop: 15, marginLeft: 15, marginRight: 15}}>
      {data.map((items) => {
        return <CustomCard title = {items.title} url = {items.image} amount = {items.amount} rating = {items.rating} _id = {items._id}/>
      })}
    </Grid>
    </>
  )
}
