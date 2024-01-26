import { View, Text } from "react-native";
import React from "react";
import { AppTheme } from "theme";

const HeaderBackground = (props: { theme: AppTheme }) => {
  const { theme } = props;
  return (
    <View
      style={{
        backgroundColor: theme.colors.backgroundColor[900],
        height: "100%",
      }}
    />
  );
};

export default HeaderBackground;
