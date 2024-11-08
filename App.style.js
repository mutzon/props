import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "red",
  },
  workspace: {
    flex: 1,
    backgroundColor: "green",
    // justifyContent: "center",
    // flexDirection: "row",
  },
  content: {
    flex: 2,
    backgroundColor: "blue",
    justifyContent: "center",
    flexDirection: "row",
  },
});
