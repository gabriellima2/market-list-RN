import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { ProductInput } from "../components/Products/ProductInput";
import { ProductList } from "../components/Products/ProductList";
import { Title } from "../components/Title";
import { useProductSelect } from "../redux/slices/productSlice";

export const HomeScreen = () => {
	const { list } = useSelector(useProductSelect);

	return (
		<View style={styles.container}>
			<StatusBar style="auto"/>

			<Title>
				MARKETLIST
			</Title>

			<ProductInput />
			{!list.length
				? <Text
						style={styles.emptyText}
						>
							Lista Vazia! Adicione produtos acima
					</Text>
				:<ProductList />
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 16,
		paddingRight: 16,
	},
	emptyText: {
		alignSelf: "center",
		marginTop: 32,

		fontSize: 16,
		fontWeight: "bold",
		color: "#F06363"
	}
})
