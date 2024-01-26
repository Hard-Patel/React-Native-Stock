/**
 * @format
 */
import React from "react";
import { Image } from "react-native";
import { useAppTheme } from "theme";
import { Images } from "assets/images";
import { HeaderlogoIcon } from "assets/svg";

function AppLogo() {
  const theme = useAppTheme();
  // return (
  //   <HeaderlogoIcon
  //     height={35}
  //     width={35}
  //     color={theme.colors.themeColor[900]}
  //   />
  // );
  return <Image source={Images.icon_logo} style={{ height: 40, width: 40 }} />;
}

export default AppLogo;
