import { useState } from "react"
import { Button, TextInput } from "react-native"
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
				value={value}
				onChangeText={setValue}
				keyboardType="default"
				placeholder="Digite o produto"
			/>
			<Button title="Adicionar produto" onPress={handlePress} />
		</>
	);
}
