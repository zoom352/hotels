import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Carusel(props: any) {
    var items = [
        {
            name: "Random Name #1",
            description: "hello bro",
            picture: "http://random.com/next",
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            picture: "http://random.com/next"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props: any)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img src={props.item.picture}/>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Carusel;
