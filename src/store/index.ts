import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import HotelsReducer from "./reducers/hotels";

const rootReducer = combineReducers({
    hotels: HotelsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch