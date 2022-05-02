import React, { useContext, useEffect, useState } from "react";
import PostService from "../../Api"
import { AuthContext } from "../../context";
import Favorites from "./favorites";
import Hotels from "./hotels";
import Search from "./search";
import { format } from 'date-fns'

type pricePercentile = {
  3: number;
  10: number;
  35: number;
  50: number;
  75: number;
  99: number;
}

type geo = {
  lat: number;
  lon: number
}

type locations = {
  country: string;
  geo: geo[];
  name: string;  
}

type hotels = {
  hotelId: number;
  hotelName: string;
  location: locations[];
  locationId: number;
  priceAvg: number;
  priceFrom: number;
  pricePercentile: pricePercentile[];
  stars: number
}

const Page = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [state, setState] = useState<any>([])
    const [basket, setBasket] = useState<any>([])
    const [search, setSearch] = useState('')
    const [selectedSort, setSelectedSort] = useState<any>('')
    const [checkIn, setCheckIn] = React.useState<any>('' || null);
    const [checkOut, setCheckOut] = React.useState<any>('' || null);
    const [like, setLike] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      async function hotels() {
        setLoading(true)
        const responce = PostService.getAll('Moscow', '2022-12-10', '2022-12-11')
        setState((await responce).data)
        setLoading(false)
      }
      hotels()
    }, [])

    async function getHotel() {
      const responce = PostService.getAll(search, checkIn, checkOut)
      setState((await responce).data)
    }

    const changeCalendar = (date: any) => {
      setCheckIn(format(date, 'yyyy-MM-dd'))
    }

    const changeCalendarOut = (date: any) => {
      setCheckOut(format(date, 'yyyy-MM-dd'))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const onChangeAdd = (id: number) => {
      const findItem = [...basket, state.find((el: hotels) => el.hotelId === id)]
      setBasket(findItem)
      setLike(true)
    }

    const onRemoveAdd = (id: number) => {
      const deleteItem = [...basket.filter((el: hotels) => el.hotelId !== id)]
      setBasket(deleteItem)
      setLike(false)
    }

    const logOut = () => {
      setIsAuth(false)
      localStorage.removeItem('auth')
    }

    const sortHotels = (val: string) => {
      setSelectedSort(val)
      setBasket([...basket].sort((a, b) => a[val] - b[val]))
    }

  return (
      <div>
        <button onClick={logOut}>Logout</button>
        <div className="wrapper">
          <div>
            <Search
                fullName={state}
                getHotel={getHotel} 
                onChange={onChange}
                search={search}
                checkIn={checkIn}
                checkOut={checkOut}
                changeCalendar={changeCalendar}
                changeCalendarOut={changeCalendarOut}
            />
          </div>
          <div style={{marginLeft: '-40%', marginTop: '3%'}}>
            <Hotels loading={loading} fullName={state} onChangeAdd={onChangeAdd}/>
          </div>
          <div style={{marginTop: '-81%'}}>
            <Favorites 
              like={like}
              basket={basket}
              onChangeAdd={onRemoveAdd}
              selectedSort={selectedSort}
              sortHotels={sortHotels}
            />
          </div>
        </div>
      </div>
  )
}

export default Page;
