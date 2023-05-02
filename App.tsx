import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { StyleSheet } from 'react-native';
import { MainStackScreen } from './src/screens';
import { FONTS } from "./src/utils/constants";
export default function App() {
  const [loaded] = useFonts(FONTS)
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "PlusJakartaSans-Regular"
  },
});
