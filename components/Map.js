import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

import MapView from 'react-native-maps'
import { useSelector } from 'react-redux'
import tw from 'twrnc'

import { selectOrigin } from '../slices/navSlice'

const Map = () => {
	const origin = useSelector(selectOrigin);
	return (
		<MapView
			style         = {tw `flex-1`}								//? Set style to flex-1 to fill the screen
			mapType       = "mutedStandard"							//? Set map type to mutedStandard to hide the map's default UI
			initialRegion = {{
				latitude      : origin.location.lat,
				longitude     : origin.location.lng,
				latitudeDelta : 0.005,
				longitudeDelta: 0.005,
			}}
		>
			{origin?.location?.lat && origin?.location?.lng && (
				<MapView.Marker
					coordinate = {{
						latitude : origin.location.lat,
						longitude: origin.location.lng,
					}}
				>
					<Icon
						name  = "flag-checkered"
						type  = "font-awesome"
						color = "black"
						size  = {30}
					/>
				</MapView.Marker>
			)}
		</MapView>
	)
}

export default Map

const styles = StyleSheet.create({})
