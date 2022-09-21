import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";

import { addProduct } from "../../redux/slices/productSlice";

import { ProductInput } from "./ProductInput";
import { Modal } from "../Modal";

const addIcon = require("../../../assets/add.png")

export const AddNewProduct = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	const handleAddProduct = (value) => {
		if (!value) return;

		dispatch(addProduct({ name: value }));
		setIsOpen(false)
	}

	return (
		<>
			<TouchableOpacity
				style={styles.openModalButton}
				onPress={() => setIsOpen(true)}
			>
				<Image source={addIcon} resizeMode="contain"/>
			</TouchableOpacity>
			<Modal title="Adicionar Produto" isOpen={isOpen} handleClose={() => setIsOpen(false)}>
				<ProductInput handlePress={handleAddProduct} placeholder="Digite o nome do produto..." buttonText="Adicionar"  />
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)"
	},
	container: {
		width: "85%",
		height: 200,

		borderRadius: 4,

		backgroundColor: "#f1f1f1"
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		padding: 12,

		backgroundColor: "#111111"
	},
	headerText: {
		color: "#f1f1f1",
		fontWeight: "500",
		fontSize: 16
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

		backgroundColor: "#202020",
	},
	closeButton: {
		padding: 8,
		borderRadius: 100,
		backgroundColor: "#303030"
	},
	input: {
		width: "100%",

		borderBottomWidth: 1,
		paddingVertical: 0,
		paddingHorizontal: 8
	},
	addButton: {
		width: "100%",

		padding: 16,
		borderRadius: 4,
		marginTop: 16,

		backgroundColor: "#111111",
	},
	addButtonText: {
		color: "#f1f1f1",
		fontWeight: "500",
		textAlign: "center"
	}
})
