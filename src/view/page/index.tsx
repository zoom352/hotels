import React, { useEffect, useState } from "react";
import PostService from "../../Api"
import Favorites from "./favorites";
import Hotels from "./hotels";
import Search from "./search";

const Page = () => {

    const [state, setState] = useState<any>([])
    const [search, setSearch] = useState('')
    const [basket, setBasket] = useState<any>([])
    const [like, setLike] = useState(false)

    useEffect(() => {
      async function name1() {
        const responce = PostService.getAll('Moscow')
        setState((await responce).data)
      }
      name1()
    }, [])

    const onChange = (e: any) => {
        setSearch(e.target.value)
    }

    const onChangeAdd = (id: any) => {
      const findItem = [...basket, state.find((el: any) => el.hotelId === id)]
      setBasket(findItem)
      setLike(true)
    }

    const onRemoveAdd = (id: any) => {
      const deleteItem = [...basket.filter((el: any) => el.hotelId !== id)]
      setBasket(deleteItem)
      setLike(false)
    }

    async function getHotel() {
      const responce = PostService.getAll(search)
      setState((await responce).data)
    }

  return (
        <div className="wrapper">
          <div>
            <Search 
                fullName={state}
                getHotel={getHotel} 
                onChange={onChange}
                search={search}
            />
          </div>
          <div style={{marginLeft: '-40%', marginTop: '3%'}}>
            <Hotels fullName={state} onChangeAdd={onChangeAdd}/>
          </div>
          <div style={{marginTop: '-81%'}}>
            <Favorites like={like} basket={basket} onChangeAdd={onRemoveAdd}/>
          </div>
        </div>
  )
}

export default Page;
