import { HotelsActionEnum } from "./types";
import PostService from './../../../Api/index'

const city = 'Moscow'
export const hotelAC = {
  getHotels: (payload: any): any => 
  ({type: HotelsActionEnum.HOTELS_GET, payload}),

  fetchHotelsThunk: () => async(dispatch: any) => {
    try {
      const response = await PostService.getAll('')
      dispatch(hotelAC.getHotels(response.data))
    } catch(e) {
      console.log(e)
    }
  }
}