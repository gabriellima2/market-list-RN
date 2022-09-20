import { useState } from "react";
import { Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useDispatch } from "react-redux";

import { addProduct } from "../../redux/slices/productSlice";

const closeIcon = require("../../../assets/close.png")
const addIcon = require("../../../assets/add.png")

const AddProductModal = (props) => {
	const [value, setValue] = useState("");

	const handleAddButtonPress = () => {
		props.handleAddProduct(value);
		setValue("");
	}

	return (
		<Modal
			visible={props.isOpen}
			transparent
		>
			<SafeAreaView style={styles.safeArea}>
				<View style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.headerText}>Adicione um produto</Text>

						<TouchableOpacity
							style={styles.closeButton}
							onPress={props.handleClose}
						>
							<Image source={closeIcon} resizeMode="contain"/>
						</TouchableOpacity>
					</View>
					<View style={styles.content} >
						<TextInput
							style={styles.input}
							value={value}
							onChangeText={setValue}
							keyboardType="default"
							placeholder="Digite o nome do produto"
						/>
						<TouchableOpacity style={styles.addButton} onPress={handleAddButtonPress}>
							<Text style={styles.addButtonText}>Adicionar produto</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</Modal>
	)
}

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
			<AddProductModal
				isOpen={isOpen}
				handleClose={() => setIsOpen(false)}
				handleAddProduct={handleAddProduct}
			/>
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
