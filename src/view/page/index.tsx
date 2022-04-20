import React, { useEffect, useState } from "react";
import PostService from "../../Api"
import Favorites from "./favorites";
import Hotels from "./hotels";
import Search from "./search";

const Page = () => {

    const [state, setState] = useState<any>([])
    const [search, setSearch] = useState('')

    useEffect(() => {
      async function name1() {
        const responce = PostService.getAll('Moscow')
        setState((await responce).data)
      }
      name1()
    }, [])

    console.log(state)

    const onChange = (e: any) => {
        setSearch(e.target.value)
    }

    async function getHotel() {
      const responce = PostService.getAll(search)
      setState((await responce).data)
    }

    var fullHotel

    for (var hotel in state.results) {
      fullHotel = state.results[hotel]
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
            <Hotels/>
          </div>
          <div style={{marginTop: '-81%'}}>
            <Favorites fullName={state}/>
          </div>
        </div>
  )
}

export default Page;
