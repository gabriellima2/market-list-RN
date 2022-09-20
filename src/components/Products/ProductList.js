import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { removeProduct, useProductSelect } from "../../redux/slices/productSlice"

const ProductItem = (props) => {
	const dispatch = useDispatch();

	const handlePress = (action, id) => {
		if (action === "edit") {}

		if (action === "remove") {
			return dispatch(removeProduct({ id: props.id }));
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.name}>{props.name}</Text>
			<View style={styles.buttons}>
				<TouchableOpacity
					style={styles.editButton}
					onPress={() => handlePress("edit")}
				>
					<Text>Editar</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.removeButton}
					onPress={() => handlePress("remove")}
				>
					<Text>Remover</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export const ProductList = () => {
	const { list } = useSelector(useProductSelect);

	return (
		<FlatList
			data={list}
			renderItem={({item}) => <ProductItem name={item.name} id={item.id} />}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",

		marginTop: 32
	},
	name: {
		fontSize: 20,

	},
	buttons: {
		alignItems: "flex-start"
	},
	editButton: {
		width: 100,

		alignItems: "center",

		borderRadius: 4,
		padding: 8,
		backgroundColor: "#f1f1f1",
	},
	removeButton: {
		width: 100,

		color: "#f1f1f1",
		alignItems: "center",

		borderRadius: 4,
		padding: 8,
		backgroundColor: "#F06363",
	}
})
