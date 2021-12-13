import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'

const EatScreen = () => {
	return (
		<SafeAreaView style={tw `bg-white h-full`}>
			<Text>EatScreen</Text>
		</SafeAreaView>
	)
}

export default EatScreen

const styles = StyleSheet.create({})
