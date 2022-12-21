import { combineReducers } from "redux";
import wishlist from "./wishlist"

const reducer = combineReducers({
    yurak:wishlist
})

export default reducer