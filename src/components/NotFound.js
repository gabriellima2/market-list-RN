import { StyleSheet, Text, View } from "react-native";

export const NotFound = ({ children }) => (
	<View style={styles.container}>
		<Text style={styles.text}>{children}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		marginTop: 32,

		fontSize: 16,
		fontWeight: "bold",
		color: "#F06363"
	}
})
