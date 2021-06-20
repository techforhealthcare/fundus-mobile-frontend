import { Platform } from 'react-native';
export const platformConstants = {
  IOS: 'ios',
  ANDROID: 'android',
  WINDOWS: 'macos',
  MACOS: 'windows',
  WEB: 'web',
};

export const getDevicePlatform = () => Platform.OS;
