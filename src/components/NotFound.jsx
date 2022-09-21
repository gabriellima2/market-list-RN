import { StyleSheet, Text, View } from "react-native";

import { Themes } from "../themes";

export const NotFound = ({ children }) => (
	<View style={styles.container}>
		<Text style={styles.text} accessibilityRole="alert">{children}</Text>
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
		color: Themes.colors.alert,
	}
})
