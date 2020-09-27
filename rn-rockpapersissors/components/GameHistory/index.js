/** @format */

import React, { useCallback, useState } from "react";
import {
	TouchableOpacity,
	View,
	ScrollView,
	FlatList,
	Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Cell from "./cell";
import { CellStyle, RowStyle, GameHistoryStyle } from "./style";
export default function GameHistory(props) {
	const [isShowHistory, setShowHistory] = useState(false);
	const onPress = () => setShowHistory(!isShowHistory);

	const renderItem = ({ item, index }) => (
		<View style={RowStyle.normalRow} key={index.toString()}>
			<Text style={[CellStyle.normalCell, { flex: 1 }]}>{index + 1}</Text>
			<Text style={[CellStyle.normalCell, { flex: 2 }]}>{item.user}</Text>
			<Text style={[CellStyle.normalCell, { flex: 2 }]}>{item.comp}</Text>
			<Text style={[CellStyle.normalCell, { flex: 1 }]}>
				{item.result}
			</Text>
		</View>
	);

	return (
		<View style={GameHistoryStyle.container}>
			<TouchableOpacity
				onPress={onPress}
				style={
					isShowHistory
						? GameHistoryStyle.buttonClickStyle
						: GameHistoryStyle.buttonDefault
				}
			>
				<Text
					style={
						isShowHistory
							? GameHistoryStyle.textClickStyle
							: GameHistoryStyle.textStyle
					}
				>
					{" "}
					{isShowHistory ? "Hide" : "Show"} game history{" "}
					<FontAwesome5 name="history" size={24} color="black" />
				</Text>
			</TouchableOpacity>

			{isShowHistory && (
				<View
				>
					<View style={RowStyle.titleRow}>
						<Text style={[CellStyle.titleCell, { flex: 1 }]}>
							No.
						</Text>
						<Text style={[CellStyle.titleCell, { flex: 2 }]}>
							User
						</Text>
						<Text style={[CellStyle.titleCell, { flex: 2 }]}>
							Computer
						</Text>
						<Text style={[CellStyle.titleCell, { flex: 1 }]}>
							Result
						</Text>
					</View>
					<ScrollView
						style={{
                            marginBottom: 350
						}}
					>
						<FlatList
							data={props.data}
							renderItem={renderItem}
							onEndThreshold={0}
                            keyExtractor={(item, index) => index.toString()}
						/>
					</ScrollView>
				</View>
			)}
		</View>
	);
}
