import React from "react";
import { StatusBar, StatusBarProps, StatusBarStyle } from "react-native";
import { useAppTheme, useThemeUtils } from "theme";

type StatusBarRowProps = StatusBarProps;

const StatusBarRow = (props: StatusBarRowProps) => {
  const theme = useAppTheme();
  const { statusBarContent } = useThemeUtils();

  return (
    <StatusBar
      backgroundColor={theme.colors.backgroundColor[900]}
      barStyle={statusBarContent}
      {...props}
    />
  );
};

export { StatusBarRow };
