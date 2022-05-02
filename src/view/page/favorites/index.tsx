import React from "react";
import Box from '@mui/material/Box';
import Hotel from "../../../components/search";
import Card from "../../../components/card";
import MySelect from "../../../components/mySelect";

const Favorites = (props: any) => {
    const {
      like, 
      onChangeAdd, 
      basket,
      selectedSort,
      sortHotels
    } = props;

    return (
    <Box
      style={{marginLeft: '5%', marginTop: '5%'}}
      sx={{
        borderRadius: 5,
        width: 350,
        height: 350,
        backgroundColor: 'primary.dark'
    }}>
      <h2>Избранное</h2>
      <MySelect
        value={selectedSort}
        onChange={sortHotels}
        defaultValue=''
        options={[
          {value: 'priceAvg', name: 'ценна'},
          {value: 'stars', name: 'Рейтинг'}
        ]}
      />
      {basket?.map((el: any) => {
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

export default Favorites;
