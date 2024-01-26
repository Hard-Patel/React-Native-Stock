/**
 * @format
 */
import React from 'react';
import {RootStackScreenProps} from 'interface';
import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import {fontFamily, useAppTheme} from 'theme';
import {styles} from './styles';
import {ArrowBackIcon, ScrollView} from 'native-base';
import {StatusBarRow} from 'components/StatusBar/StatusBarComponent';
import {SafeTouchable} from 'components';
import {StockDetails} from 'json/Details';
import {LineChart as ChartKitLineChart} from 'react-native-chart-kit';

const data = [
  {value: 50},
  {value: 80},
  {value: 90},
  {value: 70},
  {value: 50},
  {value: 80},
  {value: 90},
  {value: 70},
  {value: 50},
  {value: 80},
  {value: 90},
  {value: 70},
  {value: 50},
];

const data2 = [
  {value: 70},
  {value: 80},
  {value: 100},
  {value: 60},
  {value: 120},
  {value: 70},
  {value: 110},
  {value: 50},
  {value: 120},
  {value: 85},
  {value: 95},
  {value: 125},
  {value: 55},
];

function Details(props: RootStackScreenProps<'Details'>) {
  const {navigation, route} = props;
  const {company_name, currency, label, last_price} = route.params;

  const [graphData, setData] = React.useState(data);

  const theme = useAppTheme();

  //   React.useEffect(() => {
  //     const interval = setInterval(() => {
  //       setData(prevData => {
  //         const newData = [...prevData];
  //         // newData.shift();
  //         newData.push({value: Math.random() * 100});
  //         return newData;
  //       });
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerStyle: {backgroundColor: theme.colors.backgroundColor[900]},
      headerLeft: () => {
        return (
          <View style={styles.headerLeftViewStyle}>
            <SafeTouchable
              onPress={() => {
                navigation.goBack();
              }}>
              <ArrowBackIcon
                style={{
                  color: theme.colors.text_color[900],
                  fontSize: 30,
                }}
              />
            </SafeTouchable>
            <Text
              style={[
                styles.headerLeftViewTextStyle,
                {
                  color: theme.colors.themeColor[900],
                  fontFamily: fontFamily.bold,
                },
              ]}>
              {company_name}
            </Text>
          </View>
        );
      },
    });
  }, [navigation, company_name]);

  const stockDetails = StockDetails;
  const {
    longName,
    shortName,
    address1,
    open,
    previousClose,
    dayHigh,
    dayLow,
    fiftyTwoWeekHigh,
    fiftyTwoWeekLow,
    '52WeekChange': fiftyTwoWeekChange,
    askSize,
    bidSize,
    averageVolume,
    city,
    country,
    exchange,
    currency: stockCurrency,
    dividendRate,
    lastDividendDate,
    currentPrice,
    fiftyDayAverage,
    twoHundredDayAverage,
    compensationRisk,
    auditRisk,
    targetHighPrice,
    targetLowPrice,
    targetMeanPrice,
    targetMedianPrice,
    enterpriseValue,
    quoteType,
  } = stockDetails;

  const screenWidth = Dimensions.get('window').width - 90;
  const isLoading = false;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: theme.colors.backgroundColor[900],
      }}>
      <StatusBarRow />
      {isLoading ? (
        <ActivityIndicator color={theme.colors.themeColor[900]} />
      ) : (
        <>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              paddingHorizontal: 10,
            }}>
            {/* <LineChart
          hideOrigin
          showDataPointOnFocus
          showTextOnFocus
          showStripOnFocus
          data={graphData}
          data2={data2}
          width={screenWidth}
          color1={theme.colors.themeColor[900]}
          dataPointsColor1={theme.colors.themeColor[800]}
          xAxisColor={theme.colors.text_color[900]}
          color={theme.colors.text_color[900]}
          yAxisColor={theme.colors.text_color[900]}
          curveType={CurveType.QUADRATIC}
          maxValue={150}
        /> */}
            <ChartKitLineChart
              data={{
                labels: [],
                datasets: [
                  {
                    data: graphData.map(item => item.value),
                  },
                ],
              }}
              width={screenWidth + 90}
              withVerticalLines={false}
              height={260}
              verticalLabelRotation={30}
              chartConfig={{
                backgroundColor: theme.colors.absoluteWhite[900],
                backgroundGradientFrom: theme.colors.backgroundColor[900],
                backgroundGradientTo: theme.colors.backgroundColor[900],
                decimalPlaces: 1, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(73, 96, 165, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(73, 96, 165, ${opacity})`,
                style: {
                  borderRadius: 0,
                },
                propsForDots: {
                  stroke: theme.colors.themeColor[900],
                },
              }}
              bezier
            />
          </View>
          <View style={styles.detailBottomViewStyle}>
            <View style={styles.companyInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  styles.mediumTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>{`Trade Info: `}</Text>
            </View>
            <View style={styles.companyTradeInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Current Price: `}
                <Text
                  style={[
                    styles.companyInfoTextStyle,
                    styles.mediumTextStyle,
                    {
                      color:
                        currentPrice < open
                          ? theme.colors.red[900]
                          : theme.colors.green[900],
                    },
                  ]}>
                  {`${currentPrice}`}
                </Text>
              </Text>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Currency: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${stockCurrency}`}
                </Text>
              </Text>
            </View>
            <View style={styles.companyTradeInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Open: `}
                <Text
                  style={[
                    styles.companyInfoTextStyle,
                    styles.mediumTextStyle,
                    {
                      color:
                        open < previousClose
                          ? theme.colors.red[900]
                          : theme.colors.green[900],
                    },
                  ]}>
                  {`${open}`}
                </Text>
              </Text>
              <Text style={styles.companyInfoTextStyle}>
                {`Close: `}
                <Text
                  style={[
                    styles.companyInfoTextStyle,
                    styles.mediumTextStyle,
                    {
                      color:
                        open > previousClose
                          ? theme.colors.red[900]
                          : theme.colors.green[900],
                    },
                  ]}>
                  {`${previousClose}`}
                </Text>
              </Text>
            </View>
            <View style={styles.companyTradeInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Day High: `}
                <Text
                  style={[
                    styles.companyInfoTextStyle,
                    styles.mediumTextStyle,
                    {
                      color:
                        dayHigh < dayLow
                          ? theme.colors.red[900]
                          : theme.colors.green[900],
                    },
                  ]}>
                  {`${dayHigh}`}
                </Text>
              </Text>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Day Low: `}
                <Text
                  style={[
                    styles.companyInfoTextStyle,
                    styles.mediumTextStyle,
                    {
                      color:
                        dayHigh > dayLow
                          ? theme.colors.red[900]
                          : theme.colors.green[900],
                    },
                  ]}>
                  {`${dayLow}`}
                </Text>
              </Text>
            </View>
            <View style={styles.companyTradeInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`52Wk High: `}
                <Text
                  style={[
                    styles.companyInfoTextStyle,
                    styles.mediumTextStyle,
                    {
                      color:
                        fiftyTwoWeekHigh < fiftyTwoWeekLow
                          ? theme.colors.red[900]
                          : theme.colors.green[900],
                    },
                  ]}>
                  {`${fiftyTwoWeekHigh}`}
                </Text>
              </Text>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`52Wk Low: `}
                <Text
                  style={[
                    styles.companyInfoTextStyle,
                    styles.mediumTextStyle,
                    {
                      color:
                        fiftyTwoWeekHigh > fiftyTwoWeekLow
                          ? theme.colors.red[900]
                          : theme.colors.green[900],
                    },
                  ]}>
                  {`${fiftyTwoWeekLow}`}
                </Text>
              </Text>
            </View>
            <View style={styles.companyTradeInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`52Wk Change: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${+fiftyTwoWeekChange.toFixed(2)}%`}
                </Text>
              </Text>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Average Volume: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${averageVolume}`}
                </Text>
              </Text>
            </View>
            <View style={styles.companyTradeInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Asks: `}
                <Text
                  style={[
                    styles.companyInfoTextStyle,
                    styles.mediumTextStyle,
                    {
                      color:
                        askSize < bidSize
                          ? theme.colors.red[900]
                          : theme.colors.green[900],
                    },
                  ]}>
                  {`${askSize}`}
                </Text>
              </Text>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Bids: `}
                <Text
                  style={[
                    styles.companyInfoTextStyle,
                    styles.mediumTextStyle,
                    {
                      color:
                        askSize > bidSize
                          ? theme.colors.red[900]
                          : theme.colors.green[900],
                    },
                  ]}>
                  {`${bidSize}`}
                </Text>
              </Text>
            </View>
            <View style={styles.companyInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  styles.mediumTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>{`Analytics Info: `}</Text>
            </View>
            <View style={styles.companyTradeInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Target High: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${targetHighPrice}`}
                </Text>
              </Text>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Target Low: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${targetLowPrice}`}
                </Text>
              </Text>
            </View>
            <View style={styles.companyTradeInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Target Mean: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${targetMeanPrice}`}
                </Text>
              </Text>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Target Median: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${targetMedianPrice}`}
                </Text>
              </Text>
            </View>
            <View style={styles.companyTradeInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Last 50Days Avg: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${fiftyDayAverage}`}
                </Text>
              </Text>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Audit Risk: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${auditRisk}`}
                </Text>
              </Text>
            </View>
            <View style={styles.companyTradeInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Last 200Days Avg: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${twoHundredDayAverage}`}
                </Text>
              </Text>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Compensation Risk: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${compensationRisk}`}
                </Text>
              </Text>
            </View>
            <View style={styles.companyInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  styles.mediumTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>{`Company Info: `}</Text>
            </View>
            <View style={styles.companySubInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Name: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {longName}
                </Text>
              </Text>
            </View>
            <View style={styles.companySubInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Address: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${address1}, ${city}, ${country}`}
                </Text>
              </Text>
            </View>
            <View style={styles.companySubInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Symbol (Exchange): `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${shortName} (${exchange})`}
                </Text>
              </Text>
            </View>
            <View style={styles.companySubInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Stock Type: `}
                <Text
                  style={[
                    styles.companyInfoTextStyle,
                    styles.mediumTextStyle,
                    {color: theme.colors.text_color[900]},
                  ]}>
                  {`${quoteType}`}
                </Text>
              </Text>
            </View>
            <View style={styles.companySubInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Enterprise Worth: `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${enterpriseValue}`}
                </Text>
              </Text>
            </View>
            <View style={styles.companySubInfoRowStyle}>
              <Text
                style={[
                  styles.companyInfoTextStyle,
                  {color: theme.colors.text_color[900]},
                ]}>
                {`Dividend Rate (Last dividend): `}
                <Text
                  style={[styles.companyInfoTextStyle, styles.mediumTextStyle]}>
                  {`${dividendRate} (${new Date(
                    lastDividendDate * 1000,
                  ).toDateString()})`}
                </Text>
              </Text>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}

export {Details};