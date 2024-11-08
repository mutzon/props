import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <View style={s.workspace}>
          <View style={s.content}>{/* <Text>Hello</Text> */}</View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
