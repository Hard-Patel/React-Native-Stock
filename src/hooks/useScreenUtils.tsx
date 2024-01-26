import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppTheme} from 'theme';
import AppLogo from 'components/AppLogo';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Text, View} from 'native-base';

const useScreenUtils = () => {
  const navigation = useNavigation();
  const theme = useAppTheme();

  React.useLayoutEffect(() => {
    const navigationOptions: StackNavigationOptions = {
      // headerStyle: {
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   width: '100%',
      //   backgroundColor: 'red',
      // },
      headerTitle: () => {
        return (
          <View>
            <Text textAlign={'center'}>Hello</Text>
          </View>
        );
      },
    };
    navigation.setOptions(navigationOptions);
  }, [navigation, theme]);

  return {};
};

export {useScreenUtils};
