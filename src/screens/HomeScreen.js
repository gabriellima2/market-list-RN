import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { ProductList } from "../components/Products/ProductList";
import { Title } from "../components/Title";

export const HomeScreen = () => (
  <View>
    <StatusBar style="auto"/>

		<Title>
			Adicione produtos para a sua lista
		</Title>

		<ProductList />
  </View>
)
