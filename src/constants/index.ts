import {
  Dimensions,
  Keyboard,
  PermissionsAndroid,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const KEYBOARD_EXTRA_HEIGHT = 200;

export const isAndroid = Platform.OS === 'android';

export const RECORD_PER_PAGE = 12;

export const mobileOrEmailValidateRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const mobileValidateRegex = /^\d{8,12}$/;

export const mobileOrEmailValidateRegexWithCountryCode =
  /^(?:(?:\+\d{9,13}|\d{8,12})|(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))$/;

export enum StorageKeys {
  LANGUAGE = 'language',
  SHOWN_TUTORIAL = 'shownTutorial',
  IS_PRO = 'isPro',
  NAME = 'name',
  PROFILE_IMAGE = 'profileImage',
  FAVORITES = 'favorites',
  HISTORY = 'history',
  DEFAULT_HISTORY = 'default_history',
  SELECTED_VEHICLE = 'selected_vehicle',
  USER_ID = 'user_id',
  TOKEN = 'token',
  EMAIL = 'email',
  PHONE = 'phone',
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

export const closeKeyboard = () => Keyboard.dismiss();

export type ViewStyleProps = StyleProp<ViewStyle>;

export * from './QueryKeys';

export async function canSaveToAndroid() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

export const APP_DISPLAY_NAME = 'Intuions';
export const APP_DISPLAY_TAG_LINE = `Accelerating the world’s transition into \n Sustainable Transportation`;
export const APP_DISPLAY_EMAIL = 'intuions@gmail.com';
export const APP_DISPLAY_WEBSITE = 'Intuions';
export const APP_ACTUAL_WEBSITE = 'https://intuions.com/';
export const APP_DISPLAY_CONTACT_NUMBER = '+91 794.006.7450';
export const APP_ACTUAL_CONTACT_NUMBER = '+91 7940067450';

export const INTUIONS_APP_WEBSITE = 'Intuions';
export const INTUIONS_APP_ACTUAL_WEBSITE = 'https://intuions.com/';

export const DEV_API_REQUEST_TIMEOUT = 10000;
export const API_REQUEST_TIMEOUT = 60000;

export const DEFAULT_NOTIFICATION_DANGER_TYPES = [
  {id: 1, value: 'low', label: 'Low'},
  {id: 2, value: 'medium', label: 'Medium'},
  {id: 3, value: 'high', label: 'High'},
  {id: 4, value: 'critical', label: 'Critical'},
];

export const SEVERITY_LEVEL = {
  NONE: 0,
  LOW: 3,
  MEDIUM: 1,
  HIGH: 2,
  CRITICAL: 4,
  EMERGENCY: 5,
  SNA: 6, // signal not available
};

export const DEFAULT_FILTER_MENU_ITEMS = [
  {id: 1, value: 1, label: 'All'},
  {id: 2, value: 2, label: 'This Week'},
  {id: 3, value: 3, label: 'Last Week'},
  {id: 4, value: 4, label: 'Last Month'},
];

export const DEFAULT_FILTER_MENU_ITEMS_VALUES = {
  ALL: 1,
  THIS_WEEK: 2,
  LAST_WEEK: 3,
  LAST_MONTH: 4,
};

export const BATTERY_INFORMATION_STATE = {
  SERIAL_NUMBER: 1,
  MODEL_NUMBER: 2,
  STATUS: 3,
  DATE_OF_MANUFACTURE: 4,
  CYCLE_COUNT: 5,
  CAPACITY: 6,
};
