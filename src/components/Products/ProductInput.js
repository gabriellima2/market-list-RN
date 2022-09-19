import { useState } from "react"
import { Pressable, StyleSheet, Text, TextInput } from "react-native"
import { useDispatch } from "react-redux";

import { addProduct } from "../../redux/slices/productSlice";

export const ProductInput = () => {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();

	const handlePress = () => {
		if (!value) return;

		dispatch(addProduct({ name: value }));
		setValue("");
	}

	return (
		<>
			<TextInput
				style={styles.input}
				value={value}
				onChangeText={setValue}
				keyboardType="default"
				placeholder="Digite o produto"
			/>
			<Pressable style={styles.button} onPress={handlePress}>
				<Text style={styles.buttonText}>Adicionar produto</Text>
			</Pressable>
		</>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,

		fontSize: 16,

		paddingLeft: 16,
		marginTop: 16,
		marginBottom: 16,

		borderRadius: 4,
		backgroundColor: "#f1f1f1"
	},
	button: {
		alignItems: "center",

		padding: 12,

		borderRadius: 4,
		backgroundColor: "#111111",
	},
	buttonText: {
		color: "#f1f1f1",
		fontSize: 16,
		fontWeight: "500",
		textTransform: "capitalize"
	}
})
