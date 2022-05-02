import React, { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import BasicDatePicker from "../calendar";

const SearchHotel = (props: any) => {
    const {
      getHotel, 
      onChange, 
      search,
      checkIn,
      checkOut,
      changeCalendar,
      changeCalendarOut
    } = props
    
    return <Grid style={{marginLeft: '5%'}}>
        <h4 style={{marginBottom: '1%'}}>Локация</h4>
        <TextField
          style={{marginBottom: '-2%'}}
          label="Outlined"
          variant="outlined"
          onChange={onChange}
          value={search}
        />
        <h4 style={{marginBottom: '1%'}}>Дата заселения</h4>
        <BasicDatePicker
          checkIn={checkIn}
          changeCalendar={changeCalendar}
        />
        <Grid>
          <h4 style={{marginBottom: '1%'}}>количество дней</h4>
          <BasicDatePicker 
            checkIn={checkOut}
            changeCalendar={changeCalendarOut}
          />
        </Grid>
        <Grid>
          <Button
            style={{marginTop: '5%', width: '67%'}}
            variant="contained"
            onClick={getHotel}>
              Найти
          </Button>
        </Grid>
    </Grid>
}

export default SearchHotel
