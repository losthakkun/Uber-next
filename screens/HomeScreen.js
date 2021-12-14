import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Alert } from 'react-native'

//? Importing libraries
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'

//? Importing components
import NavOptions from '../components/NavOptions'

import { GOOGLE_MAPS_APIKEY } from '@env'
import { setDestination, setOrigin } from '../slices/navSlice'

//? Create a screen that will render the HomeScreen
const HomeScreen = () => {
	const dispatch = useDispatch()

	return (
		<SafeAreaView style={tw `bg-white h-full`}>
			<View style={tw `p-5`}>
				<Image
					style={styles.uberLogo}
					source={{
						uri: "https://links.papareact.com/gzs"
					}}
				/>
				<GooglePlacesAutocomplete
					enablePoweredByContainer = {false}												//? Disable the powered by container at the bottom of the screen (default: true)
					fetchDetails             = {true}													//? Enable fetching of details for predictions (default: false)
					placeholder              = "A donde quieres ir?"					//? Placeholder text for the search bar (default: 'Search')
					nearbyPlacesAPI          = "GooglePlacesSearch"						//? Which API to use: GoogleReverseGeocoding or GooglePlacesSearch (default: GooglePlacesSearch)
					returnKeyType            = "search"												//? Specify the return key type on Android (default: "default" (or "done" on iOS))
					debounce                 = {400}													//? Debounce the requests in ms. Set to 0 to remove debounce (default: 0)
					minLength                = {3}														//? Minimum length of text to search (default: 1)
					query                    = {{
						key       : GOOGLE_MAPS_APIKEY,				//? API key for Google Maps Geocoding API
						language  : 'es',											//? Language of the results
						components: 'country:mx'							//? Components to use for the search (default: 'country:mx')
					}}
					onFail  = {(error) => console.log(error)}
					onPress = {(data, details = null) => {
						console.log(details);
						//? Disptch the action to set the origin
						dispatch(
							//? Set the origin
							setOrigin({
								location   : details.geometry.location,
								description: data.description
							})
						)
						dispatch(
							//? Set the destination
							setDestination(null)
						)
					}}
					styles          = {{
						container: {
							flex: 0,
							paddingTop: 0,
						},
						textInput: {
							backgroundColor: '#EEEEEF',
							fontSize       : 18,
							borderRadius: 5,
						},
						textInputContainer: {
							paddingHorizontal: 0,
							paddingVertical: 10,
						},
						description: {
							fontWeight: 'bold'
						}
					}}
				/>
				<NavOptions />
			</View>
		</SafeAreaView>
	)
}

//? Exporting the HomeScreen
export default HomeScreen

//? Creating the stylesheet
const styles = StyleSheet.create({
	uberLogo: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
})
