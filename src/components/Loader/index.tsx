/**
 * @format
 */

import React from "react";
import { Modal } from "react-native";
import { View, Spinner } from "native-base";
import { IViewProps } from "native-base/lib/typescript/components/basic/View/types";
import { Text } from "components";
import { useAppTheme } from "theme";

interface LoaderProps extends IViewProps {
  visible: boolean;
  label?: string;
}

function Loader(props: LoaderProps) {
  const theme = useAppTheme();
  const { visible, label, ...rest } = props;

  return (
    <Modal transparent animationType="none" visible={visible}>
      <View
        alignItems="center"
        backgroundColor={theme.colors.absoluteWhite[900]}
        flex={1}
        flexDirection="row"
        justifyContent="center"
        {...rest}
      >
        <View
          backgroundColor={theme.colors.absoluteWhite[900]}
          borderRadius={5}
          flexDirection="row"
          height="80px"
          justifyContent="center"
          padding={5}
        >
          <Spinner size="large" />
          <Text
            alignContent="center"
            alignSelf="center"
            color="#00000089"
            fontSize={18}
            mx={4}
          >
            {label}
          </Text>
        </View>
      </View>
    </Modal>
  );
}

Loader.defaultProps = {
  label: "Please wait...",
};

export { Loader };
