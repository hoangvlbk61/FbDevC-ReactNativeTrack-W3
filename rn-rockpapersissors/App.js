/** @format */

import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import SelectButton from "./components/SelectButton";
import GameHistory from "./components/GameHistory";
import styles from "./style";

const CHOICES = [
	{
		name: "rock",
		uri: require("./assets/rock.png"),
	},
	{
		name: "paper",
		uri: require("./assets/paper.png"),
	},
	{
		name: "scissors",
		uri: require("./assets/scissors.png"),
	},
];

export default function App() {
	const [gamePrompt, setGamePrompt] = useState("Choose your weapon!");
	const [userChoice, setUserChoice] = useState(-1);
	const [compChoice, setCompChoice] = useState(-1);
	const [gameHistory, setGameHistory] = useState([]);
	const [result, setResult] = useState({
		user: 0,
		comp: 0,
		tie: 0,
		result: "",
	});
	const checkMatchResult = useCallback((user, comp) => {
		if (user === comp) return 0;
		if (user === 0) {
			if (comp === 1) return -1;
			return 1;
		}
		if (user === 1) {
			if (comp === 2) return -1;
			return 1;
		}
		if (user === 2) {
			if (comp === 0) return -1;
			return 1;
		}
	}, []);

	const onPress = (idx) => () => {
		setUserChoice(idx);
		const compChoice = Math.floor(Math.random() * 3);
		setCompChoice(compChoice);
		const res = checkMatchResult(idx, compChoice);
		if (res === 1) {
			setResult({
				...result,
				user: result.user + 1,
				result: "Win",
			});
			setGameHistory([
				...gameHistory,
				{
					user: CHOICES[idx].name,
					comp: CHOICES[compChoice].name,
					result: "Win",
				},
			]);
		} else if (res === -1) {
			setResult({
				...result,
				comp: result.comp + 1,
				result: "Lose",
			});
			setGameHistory([
				...gameHistory,
				{
					user: CHOICES[idx].name,
					comp: CHOICES[compChoice].name,
					result: "Lose",
				},
			]);
		} else {
			setResult({
				...result,
				tie: result.tie + 1,
				result: "Tie",
			});
			setGameHistory([
				...gameHistory,
				{
					user: CHOICES[idx].name,
					comp: CHOICES[compChoice].name,
					result: "Tie",
				},
			]);
		}
	};

	const resultCheck = () => {
		if (result.result === "Win") return "green";
		if (result.result === "Lose") return "red";
		return "gray";
	};

	const calcWinRate = () => {
		if (result.user + result.comp)
			return parseFloat(
				(result.user / (result.user + result.comp + result.tie)) * 100
			).toFixed(2);
		return 0;
	};

	return (
		<View style={styles.container}>
			<Text style={[styles.resultText, { color: resultCheck() }]}>
				{" "}
				{result.result}{" "}
			</Text>
			<Text style={styles.winRateText}>
				Win rate: {calcWinRate()}% on{" "}
				{result.user + result.comp + result.tie} games
			</Text>
			<View
				style={{
					fontSize: 30,
					fontWeight: "bold",
				}}
			>
				<Text>
					{result.user} - {result.comp}
				</Text>
			</View>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<View style={styles.choiceContainer}>
					<Text style={styles.choiceDescription}>Player</Text>
					<Image
						source={userChoice >= 0 ? CHOICES[userChoice].uri : ""}
						resizeMode="contain"
						style={styles.choiceImage}
					/>
					<Text style={styles.choiceCardTitle}>
						{userChoice >= 0 ? CHOICES[userChoice].name : ""}
					</Text>
				</View>
				<Text
				// style={{
				// 	color: "#250902",
				// 	fontSize: 30,
				// 	fontWeight: "600",
				// }}
				>
					vs
				</Text>
				<View style={styles.choiceContainer}>
					<Text style={styles.choiceDescription}>Computer</Text>
					<Image
						source={compChoice >= 0 ? CHOICES[compChoice].uri : " "}
						resizeMode="contain"
						style={styles.choiceImage}
					/>
					<Text style={styles.choiceCardTitle}>
						{compChoice >= 0 ? CHOICES[compChoice].name : " "}
					</Text>
				</View>
			</View>
			<View style={styles.gamePromptStyle}>
				<Text style={styles.gamePromptText}>{gamePrompt}</Text>
			</View>
			<View
				style={{
					marginTop: 10,
				}}
			>
				{CHOICES.map((choice, index) => (
					<SelectButton
						key={index.toString()}
						btnText={choice.name}
						isChoose={userChoice === index}
						onPress={onPress(index)}
					/>
				))}
			</View>
			<GameHistory data={gameHistory} />
			<StatusBar style="auto" />
		</View>
	);
}
