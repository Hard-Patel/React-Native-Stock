import { Dimensions, StyleSheet } from "react-native";
import { fontConfig, fontFamily } from "theme";

export const styles = StyleSheet.create({
  lastUpdateTextStyle: { fontSize: 10, fontFamily: fontFamily.light },
  headerRightViewStyle: {
    height: 34,
    width: 34,
    marginRight: 0,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
