import { useState } from "react"
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import {
	editProduct,
	removeProduct,
	useProductSelect
} from "../../redux/slices/productSlice"

import { Modal } from "../Modal"
import { ProductInput } from "./ProductInput"

import { Themes } from "../../themes"

const ProductItem = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const dispatch = useDispatch();

	const handlePress = (action) => {
		if (action === "edit") {
			setModalIsOpen(true);
		}

		if (action === "remove") {
			return dispatch(removeProduct({ id: props.id }));
		}
	};

	const handleEdit = (value) => {
		if (value === props.name || !value) return;

		setModalIsOpen(false);
		return dispatch(editProduct({ id: props.id, name: value }));
	}

	return (
		<View style={styles.container}>
			<Text style={styles.name}>{props.name}</Text>
			<View style={styles.buttons}>
				<TouchableOpacity
					style={styles.editButton}
					onPress={() => handlePress("edit")}
				>
					<Text style={styles.editButtonText}>Edit</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.removeButton}
					onPress={() => handlePress("remove")}
				>
					<Text style={styles.removeButtonText}>Del</Text>
				</TouchableOpacity>
			</View>

			{modalIsOpen &&
				<Modal
					title="Editar Produto"
					isOpen={modalIsOpen}
					handleClose={() => setModalIsOpen(false)}
				>
					<ProductInput
						buttonText="Editar"
						placeholder="Digite o novo nome"
						handlePress={handleEdit}
						specificValue={props.name}
					/>
				</Modal>
			}
		</View>
	)
}

export const ProductList = () => {
	const { list } = useSelector(useProductSelect);

	return (
		<FlatList
			style={styles.list}
			data={list}
			renderItem={({item}) => <ProductItem name={item.name} id={item.id} />}
			keyExtractor={(item) => item.id}
		/>
	)
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
		marginTop: 32,
	},
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 8,
		marginVertical: 4,

		color: Themes.colors.font,

		backgroundColor: Themes.colors.bgOverlay,
	},
	name: {
		color: Themes.colors.font,
		fontWeight: "bold",
		fontSize: 16
	},
	buttons: {
		alignItems: "center",
	},
	editButton: {
		padding: 8,
		borderRadius: 8,
		backgroundColor: Themes.colors.bgMain,
		marginBottom: 8,
	},
	editButtonText: {
		color: Themes.colors.font
	},
	removeButton: {
		padding: 8,
		borderRadius: 8,
		backgroundColor: Themes.colors.alert,
	},
	removeButtonText: {
		color: Themes.colors.font
	}
})
