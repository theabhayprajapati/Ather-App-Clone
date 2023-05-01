import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FONTS, REGULARFONT } from "./src/utils/constants";
export default function App() {
  const [loaded] = useFonts(FONTS)
  return (
    <View style={styles.container}>
      <Text style={REGULARFONT}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "PlusJakartaSans-Regular"
  },
});
