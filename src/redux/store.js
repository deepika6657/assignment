import { configureStore } from "@reduxjs/toolkit";
import abc from "./NavbarSlice";
import user from "./DataSlice";

const store = configureStore({
reducer: {
counter : abc ,
DataStore : user
}

})

export default store;