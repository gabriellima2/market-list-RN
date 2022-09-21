import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import { AddNewProduct } from "../components/Products/AddNewProduct";
import { ProductList } from "../components/Products/ProductList";
import { NotFound } from "../components/NotFound";
import { Title } from "../components/Title";

import { useProductSelect } from "../redux/slices/productSlice";

import { Themes } from "../themes";

export const HomeScreen = () => {
	const { list } = useSelector(useProductSelect);

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<StatusBar style="light"/>

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
		color: Themes.colors.font,
		backgroundColor: Themes.colors.bgMain
	},
	container: {
		flex: 1,
		color: Themes.colors.font,
		paddingHorizontal: 16,
	},
})
