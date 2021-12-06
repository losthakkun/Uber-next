import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

//? Create a component that will render the HomeScreen
const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>Home Screen</Text>
		</SafeAreaView>
	)
}

//? Exporting the HomeScreen
export default HomeScreen

//? Creating the stylesheet
const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
	text: {
		fontSize: 30,
		color: '#000000',
	},
})
