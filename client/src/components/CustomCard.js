import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Grid, Button, CardActionArea} from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
// import { Link } from 'react-router-dom';

export default function CustomCard(props) {
  return (
    <Grid item md = {2}>
    <Card sx={{ Width: 285 }}>
    <CardActionArea href={`/product/${props._id}`}>
      <CardMedia
        component="img"
        height="240"
        image = {props.url}
        alt="Paella dish"
      />
       <CardContent>
          <Typography paragraph>
            {props.title}
          </Typography>
          <Typography paragraph>
            {props.amount}
          </Typography>
          {/* <Typography component = 'div'> */}
            <Button>{props.rating}<StarIcon fontSize="small"/></Button>
          {/* </Typography> */}
        </CardContent>
       <CardActions disableSpacing>
        <FavoriteIcon />
        <AddShoppingCartIcon/>
      </CardActions>
      </CardActionArea>
    </Card>
    </Grid>
  )
}
