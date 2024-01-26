/**
 * @format
 */
import React from "react";
import { Text, SafeTouchable } from "components";
import { View, Linking, Image } from "react-native";
import { useAppTheme } from "theme";

import { INTUIONS_APP_ACTUAL_WEBSITE, INTUIONS_APP_WEBSITE } from "constants";
import { styles } from "screens/Auth/Login/styles";

interface IPoweredByProps {
  style?: any;
}

function PoweredByComponent(props: IPoweredByProps) {
  const theme = useAppTheme();
  const { style } = props;

  return (
    <View style={[{ paddingTop: 5, alignItems: "center" }, style]}>
      <SafeTouchable
        onPress={() => {
          Linking.openURL(INTUIONS_APP_ACTUAL_WEBSITE);
        }}
      >
        <Text
          color={theme.colors.text_color[900]}
          style={[styles.poweredTextStyle]}
        >
          {"Powered By "}
          <Text color={theme.colors.link[900]} style={styles.poweredTextStyle}>
            {INTUIONS_APP_WEBSITE}
          </Text>
        </Text>
      </SafeTouchable>
    </View>
  );
}

export default PoweredByComponent;
