import { Button, FlatList, Text, View } from "react-native"
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
		<View>
			<Text>{props.name}</Text>
			<View>
				<Button title="Editar produto" onPress={() => handlePress("edit")} />
				<Button title="Remover produto" onPress={() => handlePress("remove")} />
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
