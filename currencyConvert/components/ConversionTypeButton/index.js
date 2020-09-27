/** @format */

import { TouchableOpacity, Text } from "react-native";
import React from "react";

const ConversionButton = (props) => {
	const fromFlag = props.from === "usd" ? "🇺🇲" : "🇻🇳";
	const toFlag = props.from === "usd" ? "🇻🇳" : "🇺🇲";
	return (
		<TouchableOpacity
			style={{
				width: 200,
				height: 24,
				borderRadius: 12,
				borderColor: "#41dde8",
				borderWidth: 1,
                margin: 10,
                backgroundColor: props.isChosen ? "#3687f7" : "#FFFFFF"
			}}
			onPress={props.onClick}
		>
			<Text
				style={{
					textAlign: "center",
				}}
			>
				{fromFlag} to {toFlag}
			</Text>
		</TouchableOpacity>
	);
};

export default ConversionButton;
