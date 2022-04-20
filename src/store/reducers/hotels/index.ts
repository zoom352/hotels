import { HotelsActionEnum } from "./types"


const initialState: any = {
  hotels: []
}

const HotelsReducer = (state = initialState, action: any): any => {
  switch(action.type) {
    case HotelsActionEnum.HOTELS_GET:
      return {...state, hotels: action.payload}

    default:
      return state
  }
}

export default HotelsReducer;