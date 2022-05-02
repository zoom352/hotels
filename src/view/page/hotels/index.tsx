import React from "react";
import Box from '@mui/material/Box';
import Carusel from "../../../components/carusel";
import Card from "../../../components/card";
// import './index.css'

const Hotels = (props: any) => {
  const {loading, fullName, onChangeAdd, like} = props;

    return (
      // eslint-disable-next-line react/style-prop-object
        <Box
          style={{marginLeft: '5%'}}
          sx={{
            borderRadius: 5,
            width: 350,
            height: 850,
            backgroundColor: 'primary.dark'
        }}>
          <div className="scrol">
          <h2>Отели <span>Москва</span></h2>
          <Carusel/>
          {fullName?.map((el: any) => {
          return ( 
            <Card
              loading={loading}
              onChangeAdd={onChangeAdd}
              name={el.hotelName}
              stars={el.stars}
              price={el.priceAvg}
              id={el}
              like={like}
            />
          )
          })}
          </div>
        </Box>
    )
}

export default Hotels;
