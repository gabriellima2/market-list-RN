import { StyleSheet, Text } from "react-native";

import { Themes } from "../themes";

export const Title = ({ children, ...props }) => (
	<Text {...props} style={styles.title}>{children}</Text>
)

const styles = StyleSheet.create({
	title: {
		marginTop: 40,

		color: Themes.colors.font,
		fontWeight: "bold",
		fontSize: 24,
		letterSpacing: 2
	}
});
