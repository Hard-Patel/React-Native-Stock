/**
 * @format
 */
import {
  initThemeProvider,
  useStyle,
} from "@pavelgric/react-native-theme-provider";

import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";
import { getStatusBarContent } from "./theme-utils";
import { StatusBarStyle } from "react-native";

export const themes = { dark: darkTheme, light: lightTheme };

export type Themes = typeof themes;
export const {
  createUseStyle,
  createStyle,
  useTheme,
  useThemeDispatch,
  ThemeProvider,
} = initThemeProvider({ themes, initialTheme: "light" });

const useAppThemeName = () => {
  const { selectedTheme } = useTheme();
  return selectedTheme;
};

const useAppTheme = () => {
  const { selectedTheme } = useTheme();
  const appTheme = themes[selectedTheme];
  return appTheme;
};

const useSetAppTheme = () => {
  const { setTheme } = useThemeDispatch();
  return { setTheme };
};

const useToggleTheme = () => {
  const { selectedTheme } = useTheme();
  const { setTheme } = useThemeDispatch();
  const toggleTheme = () => {
    setTheme(selectedTheme === "light" ? "dark" : "light");
  };
  return { toggleTheme };
};

const useThemeUtils = (): {statusBarContent: StatusBarStyle} => {
  const statusBarContent = getStatusBarContent();
  return { statusBarContent };
};

export {
  useStyle,
  useAppThemeName,
  useAppTheme,
  useSetAppTheme,
  useToggleTheme,
  useThemeUtils,
};
