import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { useAppTheme } from "theme";
import { timeSince } from "global/global.functions";

interface UpdatedAPIDataTime {
  updatedAt: number;
}

const UpdatedAPIDataTime = (props: UpdatedAPIDataTime) => {
  const { updatedAt = Date.now() } = props;
  const theme = useAppTheme();
  const [updatedAtFormatted, setUpdatedAtFormatted] = useState<string>("");

  useEffect(() => {
    const lastUpdated = updatedAt ? updatedAt : Date.now();
    // Update the text on the first time props change
    const tm = setTimeout(() => {
      const updatedAtFormattedString = `Last updated ${timeSince(lastUpdated)}`;
      setUpdatedAtFormatted(updatedAtFormattedString);
      clearTimeout(tm);
    }, 100);
    // Update the text on the every five seconds interval
    const tI = setInterval(() => {
      const updatedAtFormattedString = `Last updated ${timeSince(lastUpdated)}`;
      setUpdatedAtFormatted(updatedAtFormattedString);
    }, 5000);
    return () => {
      clearInterval(tI);
    };
  }, [updatedAt]);
  return (
    <Text
      style={[
        styles.lastUpdateTextStyle,
        { fontSize: 10, color: theme.colors.text_color[900] },
      ]}
      numberOfLines={1}
    >
      {updatedAtFormatted}
    </Text>
  );
};

export default UpdatedAPIDataTime;
