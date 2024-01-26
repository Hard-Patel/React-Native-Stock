import { TouchableHighlight } from "react-native";
import { applicationTheme } from "theme/theme-utils";

export const triggerStyles = {
  triggerText: {
    color: "white",
  },
  triggerWrapper: {
    padding: 5,
  },
  triggerTouchable: {
    underlayColor: applicationTheme.colors.backgroundColor[900],
    activeOpacity: 70,
  },
  TriggerTouchableComponent: TouchableHighlight,
};

export const optionsStyles = {
  optionsContainer: {
    padding: 5,
    borderRadius: 10,
    marginTop: 35,
    width: 150,
    backgroundColor: applicationTheme.colors.backgroundColor[800],
  },
  optionsWrapper: {},
  optionWrapper: {
    margin: 5,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  optionText: {
    color: "brown",
  },
};
