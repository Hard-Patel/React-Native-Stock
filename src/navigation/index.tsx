/**
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {
  AppState,
  AppStateStatus,
  PermissionsAndroid,
  Platform,
  TextStyle,
  View,
} from 'react-native';
import {navigationRef} from './navigationRef';
// Screens
import {focusManager} from 'react-query';
import {RootStackParamList} from '../interface';
import {isAndroid} from '../constants';
import {Home} from '../screens/Home/Home';
import {fontFamily, useAppTheme} from 'theme';
import {Details} from 'screens/StockDetails/DetailsPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

function NavContainer() {
  const theme = useAppTheme();

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }

  React.useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);

  const screenOptions: NativeStackNavigationOptions = React.useMemo(() => {
    const headerTitleStyle: Pick<
      TextStyle,
      'fontFamily' | 'fontSize' | 'fontWeight'
    > & {
      color?: string;
    } = {
      color: theme.colors.text[900],
      fontFamily: fontFamily.light,
      fontSize: 22,
    };
    if (!isAndroid) {
      headerTitleStyle.fontWeight = '400';
    }

    return {
      headerShown: false,
      headerStyle: {
        backgroundColor: theme.colors.text_color[900],
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        shadowOpacity: 0,
      },
      headerTitleStyle,
      headerShadowVisible: false,
    };
  }, [theme]);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            component={Home}
            name="Home"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={Details}
            name="Details"
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default NavContainer;
