import { StyleSheet, Text } from "react-native";

export const Title = ({ children, ...props }) => (
	<Text {...props} style={styles.title}>{children}</Text>
)

const styles = StyleSheet.create({
	title: {
		marginTop: 40,

		fontWeight: "bold",
		fontSize: 24,
		letterSpacing: 2
	}
});
