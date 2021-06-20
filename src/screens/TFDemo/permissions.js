import Constants from 'expo-constants';
import * as MediaLibrary from 'expo-media-library';

const getPermissions = async () => {
  try {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    return status;
  } catch (err) {
    console.error(err);
  }
};

const requestPermissions = async () => MediaLibrary.presentPermissionsPickerAsync();

export const handlePermissions = async () => {
  if (Constants.platform.ios) {
    const permissionStatus = await getPermissions();
    if (permissionStatus !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      await requestPermissions();
    }
  }
};
