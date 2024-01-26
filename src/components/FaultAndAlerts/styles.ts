import { StyleSheet } from "react-native";
import { fontFamily } from "theme";

export const styles = StyleSheet.create({
  faultCardStyle: {
    maxHeight: 120,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 12,
    width: "100%",
  },
  headerViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  descriptionViewStyle: {
    marginTop: 4,
  },
  descViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },
  rowSpaceBetweenView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleTextStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
  },
  faultTitleTextStyle: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    marginLeft: 10,
  },
  faultDescTextStyle: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
  viewAllTextStyle: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
});
