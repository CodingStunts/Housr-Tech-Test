import { StyleSheet, View } from 'react-native';
import HomeView from './src/components/HomeView';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
});
