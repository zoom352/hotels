import React from "react";
import Box from '@mui/material/Box';
import SearchHotel from "../../../components/search";

const Search = (props: any) => {
  const {
    fullName,
    getHotel,
    onChange,
    search,
    checkIn,
    changeCalendar,
    changeCalendarOut,
    checkOut
  } = props

  
  return (
      <Box
        style={{marginLeft: '5%'}}
        sx={{
          borderRadius: 5,
          width: 350,
          height: 350,
          backgroundColor: 'primary.dark'
      }}>
        <SearchHotel 
          fullName={fullName}
          getHotel={getHotel}
          onChange={onChange}
          search={search}
          checkIn={checkIn}
          checkOut={checkOut}
          changeCalendar={changeCalendar}
          changeCalendarOut={changeCalendarOut}
        />
      </Box>
  )
}

export default Search;
