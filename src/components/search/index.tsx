import React, { useEffect, useState } from "react"
import PostService from "../../Api"
import { UseActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from "../card";

const SearchHotel = (props: any) => {
    const {fullName, getHotel, onChange, search} = props
    // const { fetchHotelsThunk } = UseActions()
    // const { hotels } = useTypedSelector((state => state.hotels))
    
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
        <TextField
          style={{marginBottom: '-2%'}}
          label="Outlined" 
          variant="outlined"
          onChange={onChange}
          value={search}
        />
        <Grid>
        <h4 style={{marginBottom: '1%'}}>количество дней</h4>
        <TextField
          style={{marginBottom: '-2%'}}
          label="Outlined"
          variant="outlined"
          onChange={onChange}
          value={search}
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
        {/* {fullName?.map((el: any) => {
          return <p>{el.fullName}</p>
        })} */}
        {/* <p>{fullName}</p> */}
    </Grid>
}

export default SearchHotel
