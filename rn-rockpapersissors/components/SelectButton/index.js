/** @format */

import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./style";
const SelectButton = (props) => {
	const { btnText, isChoose, onPress } = props;
	return (
		<TouchableOpacity
			style={isChoose ? styles.buttonClickStyle : styles.buttonStyle}
			onPress={onPress}
		>
			<Text style={isChoose ? styles.textClickStyle : styles.textStyle}>
				{btnText}
			</Text>
		</TouchableOpacity>
	);
};

export default SelectButton;
