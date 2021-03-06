import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'

const MapScreen = () => {
	return (
		<SafeAreaView style={tw `bg-white h-full`}>
			<View style={tw `h-1/2`}>
				<Text>MapScreenA</Text>
			</View>
			<View style={tw `h-1/2`}>
				<Text>MapScreenB</Text>
			</View>
		</SafeAreaView>
	)
}

export default MapScreen

const styles = StyleSheet.create({})
