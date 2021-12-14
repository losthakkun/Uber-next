import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/core'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import tw from 'twrnc'

import { selectOrigin } from '../slices/navSlice'

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
	const origin = useSelector(selectOrigin);
	return (
		<FlatList
			data         = {data}
			horizontal   = {true}
			keyExtractor = {item => item.id}
			renderItem   = {({ item }) => (
				<TouchableOpacity
					disabled = {!origin}
					onPress  = {() => navigation.navigate(item.screen)}
					style    = {tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
				>
					<View style = {tw `${!origin && 'opacity-20'}`}>
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
		/>
	)
}

export default NavOptions
