/**
 * @format
 */
import { extendTheme } from "native-base";
import { fonts, fontConfig } from "./common";

const colors = {
  primary: {
    900: "#2E53A5",
    800: "#003A52",
    700: "#6994FF",
  },
  white: {
    900: "#FFFFFF",
    800: "#C1C1C1",
  },
  frame: {
    900: "#000000",
    850: "#181818",
    800: "#333333",
  },
  black: {
    900: "#000000",
    850: "#0D0D0D",
    800: "#3C3C3C",
    700: "#181818",
  },
  message: {
    900: "#2196F3", // Info
    800: "#E80049", // Error
    700: "#FFCA28", // Warning
    600: "#4CAF50", // Success
  },
  gray: {
    900: "#222222",
    850: "#777777",
    800: "#666666",
    700: "#999999",
    650: "#A5A5A5",
    600: "#E5E5E5",
  },
  text: {
    900: "#ffffff",
    800: "#E8E8E8",
    700: "#999999",
  },
  reverseText: {
    900: "#000000",
  },
  border: {
    900: "#3C3C3C",
  },
  borderLight: {
    900: "#F0F2F5",
    850: "#E5EBF4",
    800: "#E0E0E0",
    700: "#DFE1E6",
    600: "#C3CAD9",
  },
  placeholderText: {
    800: "#98A2B2",
  },
  transparent: "rgba(255,255,255,0)",
  shadowColor: { 900: "rgba(96, 108, 128, 0.07)" },
  link: {
    900: "#50C878",
  },
  themeColor: { 900: "#81DDA0", 800: "#50C878", 600: "#98A2B2" },
  headerTextColor: { 900: "#636363" },
  text_color: {
    900: "#4D5E80",
    700: "#FF0000",
    600: "#DE465F",
  },
  backgroundColor: {
    900: "#FAFBFC",
    800: "#F0F2F5",
    700: "#EAEAEA",
    600: "#C1C1C1",
  },
  absoluteWhite: {
    900: "#FFFFFF",
  },
  absoluteBlack: {
    900: "#000000",
  },
  notificationDanger: {
    // Keys depend on the notification type (Do not change the keys)
    low: "#34AC5D",
    medium: "#ECDE5C",
    high: "#F59E0B",
    critical: "#DE465F",
  },
};

export const darkTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  colors,
  fontConfig,
  fonts,
});

export type AppTheme = typeof darkTheme;
