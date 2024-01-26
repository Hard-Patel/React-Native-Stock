/**
 * @format
 */
import React, { useEffect } from "react";
import { Text, View } from "native-base";
import { useIsConnected } from "react-native-offline";
import { fontFamily, useAppTheme } from "theme";
import { useQueryClient } from "react-query";
import { StatusBarRow } from "components/StatusBar/StatusBarComponent";

function OfflineBar() {
  const theme = useAppTheme();
  const isConnected = useIsConnected();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isConnected) {
      queryClient.invalidateQueries();
      return;
    }
  }, [isConnected]);

  if (isConnected == null || isConnected) {
    return null;
  }

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        zIndex: 9999,
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.4)",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBarRow backgroundColor={"transparent"} translucent />
      <View
        backgroundColor={theme.colors.backgroundColor[900]}
        minHeight={"10%"}
        py={8}
        px={4}
        width={"80%"}
        borderRadius={8}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text
          fontSize={18}
          py={1}
          textAlign="center"
          color={theme.colors.text_color[900]}
          fontFamily={fontFamily.semiBold}
        >
          {"No Internet Connection"}
        </Text>
        <Text
          fontSize={14}
          pt={2}
          textAlign="center"
          color={theme.colors.text_color[900]}
          fontFamily={fontFamily.regular}
        >
          {"Please check you internet connectivity and try again"}
        </Text>
      </View>
    </View>
  );
}

export { OfflineBar };
