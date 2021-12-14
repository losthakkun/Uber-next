import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'

import { setDestination } from '../slices/navSlice'
import { GOOGLE_MAPS_APIKEY } from '@env'

const NavigateCard = () => {
	const navigation = useNavigation()
	const dispatch = useDispatch()
	return (
		<SafeAreaView style = {tw`bg-white flex-1`}>
			<Text style = {tw`text-center py-5 text-xl`}>
				NavigateCard
			</Text>
			<View style = {tw`border-t border-gray-200 flex-shrink`}>
				<View>
					<GooglePlacesAutocomplete
						enablePoweredByContainer = {false}												//? Disable the powered by container at the bottom of the screen (default: true)
						fetchDetails             = {true}													//? Enable fetching of details for predictions (default: false)
						placeholder              = "A donde quieres ir?"					//? Placeholder text for the search bar (default: 'Search')
						nearbyPlacesAPI          = "GooglePlacesSearch"						//? Which API to use: GoogleReverseGeocoding or GooglePlacesSearch (default: GooglePlacesSearch)
						returnKeyType            = "search"												//? Specify the return key type on Android (default: "default" (or "done" on iOS))
						debounce                 = {400}													//? Debounce the requests in ms. Set to 0 to remove debounce (default: 0)
						minLength                = {3}														//? Minimum length of text to search (default: 1)
						query={{
							key: GOOGLE_MAPS_APIKEY,
							language: 'es',
							components: 'country:mx'
						}}
						onFail={(error) => console.log(error)}
						onPress={(data, details = null) => {
							console.log(details);
							//? Disptch the action to set the destination
							dispatch(
								//? Set the destination
								setDestination({
									location   : details.geometry.location,
									description: data.description
								})
							);
							//? Navigate to the ride screen
							navigation.navigate('RideOptionsCard');
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
								paddingHorizontal: 10,
								paddingVertical: 10,
							},
							description: {
								fontWeight: 'bold'
							}
						}}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default NavigateCard

const styles = StyleSheet.create({})
