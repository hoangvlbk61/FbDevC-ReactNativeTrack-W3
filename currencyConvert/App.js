/** @format */

import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const rate = 23564.32;

const USDformat = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 2,
	maximumFractionDigits: 3,
});
const VNDformat = new Intl.NumberFormat("vi-VN", {
	style: "currency",
	currency: "VND",
	minimumFractionDigits: 2,
	maximumFractionDigits: 3,
});

import ConversionButton from "./components/ConversionTypeButton";
export default function App() {
	const [convertType, setConvertType] = useState(1);
	const [currentValue, setCurrentValue] = useState(0);
	const [convertValue, setConvertValue] = useState(0);
	const handleClickConvert = (value) => () => {
		setConvertType(value);
		if (value === 0) {
			setConvertValue(0);
		}
		if (value === 1) {
			setConvertValue(rate * currentValue);
		}
		if (value === 2) {
			setConvertValue(parseFloat(currentValue) / rate);
		}
	};
	const handleChangeValue = useCallback(
		(inputString) => {
			const value = inputString.length ? parseFloat(inputString) : 0;
			setCurrentValue(value);
			if (convertType === 0) {
				setConvertValue(0);
			}
			if (convertType === 1) {
				setConvertValue(rate * value);
			}
			if (convertType === 2) {
				setConvertValue(parseFloat(value) / rate);
			}
		},
		[convertType, setCurrentValue, setConvertValue]
	);

	const formatMoney = (val, isCur) => {
		const value = parseFloat(val);
		if (convertType === 1) {
			return isCur ? USDformat.format(value) : VNDformat.format(value);
		}
		if (convertType === 2) {
			return isCur ? VNDformat.format(value) : USDformat.format(value);
		}
		return 0;
	};

	return (
		<View style={styles.container}>
			<StatusBar style={"auto"} />
			<View style={{ height: 15 }} />
			<Text
				style={{
					textAlign: "center",
					paddingBottom: 10,
				}}
			>
				Please enter the value of the currency you want to convert
			</Text>
			<TextInput
				style={{
					width: 300,
					height: 36,
					borderColor: "#41dde8",
					borderWidth: 1,
					borderRadius: 18,
					paddingLeft: 18,
					paddingRight: 18,
					textAlign: "center",
					fontSize: 20,
				}}
				autoFocus={true}
				selectionColor={"red"}
				keyboardType={"number-pad"}
				placeholder={"100,000,000 VND"}
				onChangeText={handleChangeValue}
			/>
			<ConversionButton
				from={"usd"}
				isChosen={convertType === 1}
				onClick={handleClickConvert(1)}
			/>
			<ConversionButton
				from={"vn"}
				isChosen={convertType === 2}
				onClick={handleClickConvert(2)}
			/>

			<Text> Current currency</Text>
			<Text
				style={{
					fontSize: 36,
					fontWeight: "bold",
					color: "green",
					textAlign: "center",
				}}
			>
				{" "}
				{formatMoney(parseFloat(currentValue, 10), true)}{" "}
			</Text>
			<Text> Conversion currency</Text>
			<Text
				style={{
					fontSize: 36,
					fontWeight: "bold",
					color: "green",
					textAlign: "center",
				}}
			>
				{" "}
				{formatMoney(parseFloat(convertValue).toFixed(2))}{" "}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		// justifyContent: "center",
		margin: 10,
	},
});
