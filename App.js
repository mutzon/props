import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Button } from "./Components/Button/Button";
import { Lower } from "./Components/Lower/Lower";
import { Upper } from "./Components/Upper/Upper";
import { useState } from "react";

export default function App() {
  const [age, setAge] = useState(59);

  function increaseAge() {
    setAge(age + 1);
    return age;
  }

  // console.log(age);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <Upper
          firstName={"Martin"}
          lastName={"Utzon"}
          // useState sendes videre på en måde, så hver gang der klikkes på button i Upper,så kører funktionen 'increaseAke'
          senderAge={increaseAge}
          // Her sender jeg tallet OG det opdateres og bruges i Upper og vises i button
          sendTal={age}
        ></Upper>

        {/*...men det er her i App.js at jeg viser resultatet af */}
        <Text>Du klikkede {age} gange</Text>
        <Lower></Lower>

        {/* <Button></Button> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
