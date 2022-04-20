import React from "react";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite'
import './index.css'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Card = (props: any) => {
    const {name, stars, price} = props
    const [value, setValue] = React.useState<number | null>(2);

    return (
    <>
      <div className="wrapper">
          <p>{name}</p>
          <Checkbox style={{marginLeft: '45%'}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <span>28 june 2020 - 1 день</span>
          <p></p>
          <Rating value={stars} readOnly />
        <p style={{marginLeft: '15%'}}>Price: <span>{price} P</span></p>
      </div>
      <hr/>
    </>
    )
}

export default Card;
