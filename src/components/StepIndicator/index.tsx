/**
 * @format
 */
import React from "react";
import { View } from "native-base";

import { useAppTheme } from "theme";

interface Props {
  steps: number;
  currentStep: number;
}

const INDICATOR_SIZE = 17;

function StepIndicator(props: Props) {
  const { steps, currentStep } = props;
  const theme = useAppTheme();

  return (
    <View
      backgroundColor={theme.colors.frame[800]}
      height="4px"
      width={steps * INDICATOR_SIZE}
    >
      <View
        backgroundColor={theme.colors.primary[700]}
        height="4px"
        left={currentStep * INDICATOR_SIZE}
        position="absolute"
        width={INDICATOR_SIZE}
      />
    </View>
  );
}

export { StepIndicator };
