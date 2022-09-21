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
					<Text style={styles.editButtonText}>Edit</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.removeButton}
					onPress={() => handlePress("remove")}
				>
					<Text style={styles.removeButtonText}>Del</Text>
				</TouchableOpacity>
			</View>
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

		color: "#f1f1f1",

		backgroundColor: "#202020",
	},
	name: {
		color: "#f1f1f1",
		fontWeight: "bold",
		fontSize: 16
	},
	buttons: {
		alignItems: "center",
	},
	editButton: {
		padding: 8,
		borderRadius: 8,
		backgroundColor: "#111111",
		marginBottom: 8,
	},
	editButtonText: {
		color: "#f1f1f1"
	},
	removeButton: {
		padding: 8,
		borderRadius: 8,
		backgroundColor: "#E93333",
	},
	removeButtonText: {
		color: "#f1f1f1"
	}
})
