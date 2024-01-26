import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useAppTheme } from "theme";
import { SafeTouchable } from "components/SafeTouchable";
import moment from "moment";
import { NavigationProp } from "@react-navigation/native";
import { InformationLoader } from "screens/Tabs/BMSHomeScreen/InfoLoader";
import { IBMSFaultItem } from "interface/bms";
import { AlertIcon, FaultIcon } from "assets/svg";

interface IRecentFaultCardProps {
  navigation: NavigationProp<any>;
  isLoading: boolean;
  item: IBMSFaultItem;
  isListing?: boolean;
  severityColor: string;
}

const RecentFaultCard = (props: IRecentFaultCardProps) => {
  const {
    navigation,
    isLoading,
    item,
    isListing = false,
    severityColor,
  } = props;
  const theme = useAppTheme();

  const handleNavigation = () => {
    navigation.navigate("FaultAndAlerts");
  };

  return (
    <View
      key={`FaultItem ${item?.fault?.vehicle_model_id} ${item?.fault?.bms_model_id}`}
      style={[
        styles.faultCardStyle,
        {
          backgroundColor: theme.colors.backgroundColor[900],
          borderColor: theme.colors.borderLight[900],
          marginTop: !isListing ? 20 : 10,
          marginBottom: !isListing ? 20 : 0,
          marginHorizontal: !isListing ? 12 : 0,
        },
      ]}
    >
      {!isLoading && isListing && (
        <View
          style={{
            height: "75%",
            width: 2,
            backgroundColor: isListing
              ? severityColor
              : theme.colors.backgroundColor[900],
          }}
        />
      )}
      <View
        key={`FaultItem ${item?.fault?.vehicle_model_id} ${item?.fault?.bms_model_id}`}
        style={[styles.container]}
      >
        <View style={[styles.headerViewStyle]}>
          {!isLoading && item ? (
            item?.fault?.category.toLowerCase() === "fault" ? (
              <FaultIcon width={18} />
            ) : (
              <AlertIcon width={18} />
            )
          ) : null}
          <View style={[styles.rowSpaceBetweenView]}>
            {isLoading ? (
              <InformationLoader loaderWidth={200} />
            ) : (
              <Text
                style={[
                  styles.faultTitleTextStyle,
                  { color: theme.colors.text_color[900] },
                ]}
              >
                {item && !isLoading
                  ? item?.fault?.display_text ?? "No Faults"
                  : !isListing
                  ? "No Active Faults"
                  : "No Fault"}
              </Text>
            )}
            <SafeTouchable onPress={handleNavigation} disabled={isLoading}>
              {!isListing ? (
                isLoading ? (
                  <InformationLoader loaderWidth={60} />
                ) : (
                  <Text
                    style={[
                      styles.viewAllTextStyle,
                      { color: theme.colors.themeColor[900] },
                    ]}
                  >
                    View all
                  </Text>
                )
              ) : null}
            </SafeTouchable>
          </View>
        </View>
        {(isListing || (item && !isLoading)) && (
          <View>
            <View style={[styles.descriptionViewStyle]}>
              <View style={[styles.descViewStyle]}>
                {isLoading ? (
                  <InformationLoader loaderWidth={120} />
                ) : (
                  <Text
                    style={[
                      styles.faultDescTextStyle,
                      { color: severityColor },
                    ]}
                  >
                    {item?.fault?.severity}
                  </Text>
                )}
              </View>
              <View style={[styles.descViewStyle]}>
                {isLoading ? (
                  <InformationLoader />
                ) : (
                  <Text
                    style={[
                      styles.faultDescTextStyle,
                      { color: theme.colors.text_color[900] },
                    ]}
                  >
                    {item?.fault?.type}
                  </Text>
                )}
                {isLoading ? (
                  <InformationLoader />
                ) : (
                  <Text
                    style={[
                      styles.faultDescTextStyle,
                      { color: theme.colors.text_color[900] },
                    ]}
                  >
                    {moment(item?.createdAt).format("DD MMM YYYY hh:mm:ss a")}
                  </Text>
                )}
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default RecentFaultCard;
