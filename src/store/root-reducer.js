import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user-reducer";
import { productReducer } from "./products/product-reducer";

export const rootReducer = combineReducers({
    user:userReducer,
    categories:productReducer,
})