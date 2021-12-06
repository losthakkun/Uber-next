import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

import tw from 'twrnc'

//? Define the NavOptions list
// TODO - Add the NavOptions to the list from real source
const data = [
	{
		id    : "1",
		title : "Viajar",
		image : "https://links.papareact.com/3pn",
		screen: "MapsScreen",
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
	return (
		<FlatList
			data       = {data}
			horizontal = {true}
			renderItem = {({ item }) => (
				<TouchableOpacity
					style = {tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
				>
					<View>
						<Image
							source={{ uri: item.image }}
							style={{ width: 120, height: 120, resizeMode: "contain" }}
						/>
					</View>
					<Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
				</TouchableOpacity>
			)}
			keyExtractor = {item => item.id}
		/>
	)
}

export default NavOptions
