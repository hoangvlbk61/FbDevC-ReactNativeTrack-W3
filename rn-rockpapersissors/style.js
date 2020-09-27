/** @format */

import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#e9ebee",
		padding: 5,
    },
    
    resultText: {
        fontSize: 30,
        fontWeight: "bold",
    },

    winRateText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#6e6e6e",
    },

	choiceContainer: {
		flex: 1,
		alignItems: "center",
	},
	choiceDescription: {
		fontSize: 25,
		color: "#250902",
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
	choiceCardTitle: {
		height: 40,
		fontSize: 30,
		color: "#250902",
	},
	choiceImage: {
		width: 150,
		height: 150,
		padding: 10,
	},

	gamePromptStyle: {
		marginTop: 20,
	},
	gamePromptText: {
		fontSize: 20,
		fontWeight: "bold",
    },
    
    historyButton: {
        width: windowWidth, 
    }
});

// choicesContainer: {
// 	margin: 10,
// 	borderWidth: 2,
// 	paddingTop: 100,
// 	shadowRadius: 5,
// 	padding: 10,
// 	paddingBottom: 100,
// 	borderColor: "grey",
// 	shadowOpacity: 0.9,
// 	flexDirection: "row",
// 	alignItems: "center",
// 	backgroundColor: "white",
// 	justifyContent: "space-around",
// 	shadowColor: "rgba(0,0,0,0.2)",
// 	shadowOffset: { height: 5, width: 5 },
// },
