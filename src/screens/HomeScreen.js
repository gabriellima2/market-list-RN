import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import { AddNewProduct } from "../components/Products/AddNewProduct";
import { ProductList } from "../components/Products/ProductList";
import { NotFound } from "../components/NotFound";
import { Title } from "../components/Title";

import { useProductSelect } from "../redux/slices/productSlice";

export const HomeScreen = () => {
	const { list } = useSelector(useProductSelect);

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<StatusBar style="auto"/>

				<Title>
					MARKETLIST
				</Title>

				<AddNewProduct />

				{!list.length
					? (
						<NotFound>
							Lista Vazia! Adicione produtos
						</NotFound>
					)
					:<ProductList />
				}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		color: "#f1f1f1",
		backgroundColor: "#111111"
	},
	container: {
		flex: 1,
		color: "#f1f1f1",
		paddingHorizontal: 16,
	},
})
