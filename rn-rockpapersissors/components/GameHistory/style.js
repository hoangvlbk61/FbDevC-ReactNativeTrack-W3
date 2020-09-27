/** @format */

import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width - 30;
export const CellStyle = StyleSheet.create({
	titleCell: {
		fontSize: 20,
		fontWeight: "bold",
	},
	normalCell: {
		fontSize: 16,
		fontWeight: "400",
	},
});

export const RowStyle = StyleSheet.create({
	titleRow: {
		flex: 6,
        flexDirection: "row",
        width: windowWidth,
        minHeight: 30
		// flexGrow: "stretch",
	},
	normalRow: {
		flex: 6,
		flexDirection: "row",
        width: windowWidth,
		// flexGrow: "stretch",
	},
});

export const GameHistoryStyle = StyleSheet.create({
    buttonDefault: {
        width: 200,
		margin: 10,
		height: 50,
		borderRadius: 10,
		alignItems: "center",
        width: windowWidth,
        justifyContent: "center",
    },
	buttonClickStyle: {
        width: 200,
		margin: 10,
		height: 50,
		borderRadius: 10,
		alignItems: "center",
        justifyContent: "center",
		backgroundColor: "#640D14",
        width: windowWidth,
    },
    textStyle: {
        fontSize: 25,
		fontWeight: "bold",
        color: "#640D14",
    },
    textClickStyle: {
        fontSize: 25,
		fontWeight: "bold",
        color: "white"
    },

    container: {
        padding: 15,
        margin: 20
    }
});