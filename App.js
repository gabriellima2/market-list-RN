import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';

import { HomeScreen } from './src/screens/HomeScreen';

import { store } from './src/redux/store';

export default function App() {
  return (
		<Provider store={store}>
			<SafeAreaView>
				<HomeScreen />
			</SafeAreaView>
		</Provider>
	)
}
