import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/core'
import { Icon } from 'react-native-elements'

import tw from 'twrnc'

//? Define the NavOptions list
// TODO - Add the NavOptions to the list from real source
const data = [
	{
		id    : "1",
		title : "Viajar",
		image : "https://links.papareact.com/3pn",
		screen: "MapScreen",
	},
	{
		id    : "2",
		title : "Pedir comida",
		image : "https://links.papareact.com/28w",
		screen: "EatScreen",
	},
]

//? Define the NavOptions component
const NavOptions = () => {
	const navigation = useNavigation();
	return (
		<FlatList
			data       = {data}
			horizontal = {true}
			renderItem = {({ item }) => (
				<TouchableOpacity
					onPress = {() => navigation.navigate(item.screen)}
					style = {tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
				>
					<View>
						<Image
							source = {{ uri: item.image }}
							style  = {{ width: 120, height: 120, resizeMode: "contain" }}
						/>
					</View>
					<Text style = {tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
					<Icon
						style = {tw `p-2 bg-black rounded-full w-10 mt-4`}
						name  = "arrowright"
						color = "white"
						type  = "antdesign"
					/>
				</TouchableOpacity>
			)}
			keyExtractor = {item => item.id}
		/>
	)
}

export default NavOptions
