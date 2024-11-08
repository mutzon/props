import { TouchableOpacity, Text } from "react-native";
import { s } from "./Button.style";

export function Button() {
  return (
    <TouchableOpacity style={s.Button}>
      <Text style={s.btnText}>Hello fra Button</Text>
    </TouchableOpacity>
  );
}
