import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//? Importing libraries
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './store';

//? Importing the screens
import HomeScreen from './screens/HomeScreen';

//? Creating the App component and exporting it
export default function App() {
	return (
		<Provider store={store}>
			<StatusBar style="auto" />
			<HomeScreen/>
		</Provider>
	);
}

//? Creating the stylesheet
const styles = StyleSheet.create({
	
});
