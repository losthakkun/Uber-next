import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//? Importing libraries
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './store';

//? Importing the screens
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EatScreen from './screens/EatScreen';

//? Creating the App component and exporting it
export default function App() {
	const Stack = createStackNavigator();
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<StatusBar style="auto" />
					<Stack.Navigator>
						<Stack.Screen
							name="HomeSrcreen"
							component={HomeScreen}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="MapScreen"
							component={MapScreen}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="EatScreen"
							component={EatScreen}
							options={{
								headerShown: false,
							}}
						/>
					</Stack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
}

//? Creating the stylesheet
const styles = StyleSheet.create({
	
});
