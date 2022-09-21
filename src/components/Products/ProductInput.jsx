import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export const ProductInput = ({ buttonText, ...props }) => {
	const [value, setValue] = useState(props.specificValue || "");

	const handleConfirmButtonPress = () => {
		props.handlePress(value);
		setValue("");
	}

	return (
		<View style={styles.content} >
		<TextInput
			style={styles.input}
			value={value}
			onChangeText={setValue}
			keyboardType="default"
			placeholder={props.placeholder}
		/>
		<TouchableOpacity style={styles.confirmButton} onPress={handleConfirmButtonPress}>
			<Text style={styles.confirmButtonText}>{buttonText}</Text>
		</TouchableOpacity>
	</View>
	);
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",

		paddingHorizontal: 12,
	},
	input: {
		width: "100%",

		borderBottomWidth: 1,
		paddingVertical: 0,
		paddingHorizontal: 8
	},
	confirmButton: {
		width: "100%",

		padding: 16,
		borderRadius: 4,
		marginTop: 16,

		backgroundColor: "#111111",
	},
	confirmButtonText: {
		color: "#f1f1f1",
		fontWeight: "500",
		textAlign: "center"
	}
})
