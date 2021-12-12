import { createSlice } from "@reduxjs/toolkit";

//? Set initial state of the slice
const initalState = {
	origin               : null,
	destination          : null,
	travelTimeInformation: null,
};

//? Create the slice and export it
export const navSlice = createSlice({
	name        : "nav",
	initialState: initalState,
	reducers    : {
		//? Set the origin
		setOrigin: (state, action) => {
			state.origin = action.payload;
		},
		//? Set the destination
		setDestination: (state, action) => {
			state.destination = action.payload;
		},
		//? Set the travel time information
		setTravelTimeInformation: (state, action) => {
			state.travelTimeInformation = action.payload;
		},
	},
});

//? Export the slice actions for use in the components and reducers (redux)
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

//? Export selectors for use in the components and reducers (redux)
export const selectOrigin                = (state) => state.nav.origin;
export const selectDestination           = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

//? Export the slice for use in the components and reducers (redux)
export default navSlice.reducer;
