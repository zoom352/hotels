import React from "react";
import Box from '@mui/material/Box';
import Carusel from "../../../components/carusel";

const Hotels = () => {

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
        </Box>
    )
}

export default Hotels;
