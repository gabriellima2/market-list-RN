import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { useSelector } from "react-redux";

import { ProductInput } from "../components/Products/ProductInput";
import { ProductList } from "../components/Products/ProductList";
import { Title } from "../components/Title";
import { useProductSelect } from "../redux/slices/productSlice";

export const HomeScreen = () => {
	const { list } = useSelector(useProductSelect);

	return (
		<>
			<StatusBar style="auto"/>

			<Title>
				MARKETLIST
			</Title>

			<ProductInput />
			{!list.length
				? <Text>Lista Vazia! Adicione produtos acima</Text>
				:<ProductList />
			}
		</>
	);
}
