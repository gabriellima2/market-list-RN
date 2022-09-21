import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { addProduct } from "../../redux/slices/productSlice";

import { ProductInput } from "./ProductInput";
import { Modal } from "../Modal";

import { Themes } from "../../themes";

const addIcon = require("../../../assets/add.png")

export const AddNewProduct = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	const handleAddProduct = (value) => {
		if (!value) return;

		setIsOpen(false)
		dispatch(addProduct({ name: value }));
	}

	return (
		<>
			<TouchableOpacity
				style={styles.openModalButton}
				onPress={() => setIsOpen(true)}
			>
				<Image source={addIcon} resizeMode="contain"/>
			</TouchableOpacity>
			{isOpen &&
				<Modal
					title="Adicionar Produto"
					isOpen={isOpen}
					handleClose={() => setIsOpen(false)}
				>
					<ProductInput
						handlePress={handleAddProduct}
						placeholder="Digite o nome do produto..."
						buttonText="Adicionar"
					/>
				</Modal>
			}
		</>
	);
}

const styles = StyleSheet.create({
	safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
		backgroundColor: Themes.colors.overlay,
	},
	container: {
		width: "85%",
		height: 200,

		borderRadius: 4,

		backgroundColor: Themes.colors.contrast
	},
	content: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",

		paddingHorizontal: 12,
	},
	openModalButton: {
		padding: 20,
		borderRadius: 100,

		position: "absolute",
		bottom: 24,
		right: 24,
		zIndex: 1000,

		backgroundColor: Themes.colors.bgOverlay
	},
})
