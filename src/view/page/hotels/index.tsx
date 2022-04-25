import React from "react";
import Box from '@mui/material/Box';
import Carusel from "../../../components/carusel";
import Card from "../../../components/card";

const Hotels = (props: any) => {
  const {fullName, onChangeAdd, like} = props;

    return (
        <Box
          style={{marginLeft: '5%'}}
          sx={{
            borderRadius: 5,
            width: 350,
            height: 850,
            backgroundColor: 'primary.dark'
        }}>
          <h2>Отели <span>Москва</span></h2>
          <Carusel/>
          {fullName?.map((el: any) => {
          return ( 
            <Card
              onChangeAdd={onChangeAdd}
              name={el.hotelName}
              stars={el.stars}
              price={el.priceAvg}
              id={el}
              like={like}
            />
          )
          })}
        </Box>
    )
}

export default Hotels;
