import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'

//? Importing libraries
import tw from 'twrnc'

//? Importing components
import NavOptions from '../components/NavOptions'

//? Create a screen that will render the HomeScreen
const HomeScreen = () => {
	return (
		<SafeAreaView style={tw `bg-white h-full`}>
			<View style={tw `p-5`}>
				<Image
					style={styles.uberLogo}
					source={{
						uri: "https://links.papareact.com/gzs"
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
