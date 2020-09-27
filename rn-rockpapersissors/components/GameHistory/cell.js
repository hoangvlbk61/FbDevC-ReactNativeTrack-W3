/** @format */

import React from "react";
import { View, Text } from "react-native";
import { CellStyle } from "./style";

export default function Cell(props) {
	return (
		<View>
			<Text>{props.text}</Text>
			<Text>{props.text}</Text>
			<Text>{props.text}</Text>
		</View>
	);
}
