/**
 * @format
 */
import { View, IButtonProps, Button as NativeButton } from "native-base";
import {
  ColorType,
  ResponsiveValue,
} from "native-base/lib/typescript/components/types";
import {
  IFontSize,
  IFontWeight,
} from "native-base/lib/typescript/theme/base/typography";

import { Gradients, useAppTheme } from "theme";
import { ViewStyleProps } from "constants";

import { SafeTouchable } from "../SafeTouchable";
// import { Text } from "../Typography";
import { Text } from "react-native";
import { applicationTheme } from "theme/theme-utils";

interface GradientButtonProps extends IButtonProps {
  title: string;
  colors?: string[];
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  style?: ViewStyleProps;
  fontWeight?: ResponsiveValue<IFontWeight | number | (string & unknown)>;
  fontSize?: ResponsiveValue<IFontSize | number | (string & unknown)>;
  textColor?: ColorType;
  fontFamily?: string;
}

function GradientButton(props: GradientButtonProps) {
  const {
    colors,
    loading,
    disabled,
    loadingText,
    title,
    style,
    onPress,
    fontWeight,
    fontSize,
    fontFamily,
    textColor,
    ...rest
  } = props;

  const theme = useAppTheme();

  if (disabled) {
    return (
      <View
        borderRadius="120px"
        overflow="hidden"
        pointerEvents="none"
        style={{
          backgroundColor: theme.colors.themeColor[900],
          borderRadius: 26,
        }}
      >
        <NativeButton
          _loading={{ _text: { color: theme.colors.white[900] } }}
          backgroundColor="transparent"
          isLoading={loading}
          isDisabled={disabled}
          isLoadingText={loadingText}
          pointerEvents="none"
          style={style}
          {...rest}
        >
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: fontSize,
              color: textColor ?? theme.colors.white[900],
            }}
            fontWeight={fontWeight}
            opacity={0.3}
          >
            {title}
          </Text>
        </NativeButton>
      </View>
    );
  }

  return (
    <SafeTouchable
      onPress={onPress}
      style={{
        backgroundColor: theme.colors.themeColor[900],
        borderRadius: 26,
      }}
    >
      <View borderRadius="120px" overflow="hidden">
        <NativeButton
          _loading={{ _text: { color: theme.colors.white[800] } }}
          colorScheme={disabled ? "gray" : "brand"}
          isDisabled={disabled}
          isLoading={loading}
          isLoadingText={loadingText}
          borderRadius={4}
          pointerEvents="none"
          style={style}
          {...rest}
        >
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: fontSize,
              color: textColor,
            }}
          >
            {title}
          </Text>
          {/* <Text
            color={textColor ?? theme.colors.white[900]}
            fontSize={fontSize}
            fontWeight={fontWeight}
          >
            {title}
          </Text> */}
        </NativeButton>
      </View>
    </SafeTouchable>
  );
}

GradientButton.defaultProps = {
  disabled: false,
  loading: false,
  loadingText: "",
  style: undefined,
  onPress: undefined,
  fontWeight: "bold",
  fontSize: 15,
  textColor: applicationTheme.colors.absoluteWhite[900],
  colors: Gradients.primary,
};

export { GradientButton };
