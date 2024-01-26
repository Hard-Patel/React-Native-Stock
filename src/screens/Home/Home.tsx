/**
 * @format
 */
import React from 'react';
import {SafeTouchable} from 'components';
import {HomeItemProp, RootStackScreenProps} from 'interface';
import {View, Text} from 'react-native';
import {fontFamily, useAppTheme} from 'theme';
import {styles} from './styles';
import UpdatedAPIDataTime from 'components/UpdatedAPIDataTime/UpdatedAPIDataTime';
import AppLogo from 'components/AppLogo';
import {ScrollView} from 'native-base';
import {StatusBarRow} from 'components/StatusBar/StatusBarComponent';
import {HomePageList} from 'json/HomePageList';
import HomeItem from './HomeItem';

function Home(props: RootStackScreenProps<'Home'>) {
  const {navigation, route} = props;

  const theme = useAppTheme();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {backgroundColor: theme.colors.backgroundColor[900]},
      headerLeft: () => {
        return (
          <View style={styles.headerLeftViewStyle}>
            <Text
              style={[
                styles.headerLeftViewTextStyle,
                {
                  color: theme.colors.text_color[900],
                  fontFamily: fontFamily.bold,
                },
              ]}>
              {'Stock'}
            </Text>
          </View>
        );
      },
      headerTitle: () => {
        return <AppLogo />;
      },
    });
  }, [navigation]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: theme.colors.backgroundColor[900],
      }}>
      <StatusBarRow />
      {HomePageList.map((item: HomeItemProp, index) => {
        return <HomeItem item={item} index={index} />;
      })}
    </ScrollView>
  );
}

export {Home};
