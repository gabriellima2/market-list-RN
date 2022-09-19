import { FlatList, Text, View } from "react-native"
import { useSelector } from "react-redux"

import { useProductSelect } from "../../redux/slices/productSlice"

const ProductItem = (props) => (
	<View>
		<Text>{props.name}</Text>
	</View>
)

export const ProductList = () => {
	const { list } = useSelector(useProductSelect);

	return (
		<FlatList data={list} renderItem={({item}) => <ProductItem name={item.name}/>} />
	)
}
