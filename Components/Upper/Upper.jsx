import { s } from "./Upper.style";
import { View, Text, TouchableOpacity } from "react-native";

// Sender props afsted fra App.js og bruger dem Her

export function Upper({ firstName, lastName, senderAge, sendTal }) {
  let myAge = senderAge;
  console.log(myAge);
  return (
    <View style={s.root}>
      <Text>
        Hello {firstName} {lastName} from Upper
      </Text>

      <TouchableOpacity style={s.btn} onPress={senderAge}>
        {/* Det virker setState sender opdateringer fra App.js og vises i button her */}
        <Text style={s.btnTxt}> Hello {sendTal}</Text>
      </TouchableOpacity>
    </View>
  );
}
