import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

//? Create the store and export it
export const store = configureStore({
	//? Add the reducers to the store
	reducer: {
		nav: navReducer,
	},
});