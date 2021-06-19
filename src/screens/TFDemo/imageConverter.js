import * as ImageManipulator from 'expo-image-manipulator';
import { Alert } from 'react-native';

export const isJPEG = (uri) => {
  const jpegExtensions = ['.jpg', '.jpeg'];
  return jpegExtensions.includes(uri);
};

export const invalidImageFormatAlert = (fileExt) => {
  const title = 'Unsupported Media';
  const message = `
    The selected media extension of ${fileExt} is not supported.
    
    Please select another image of a common filetype.
    `;

  Alert.alert(title, message);
};

export const convertImageToJpeg = async (originalURI) => {
  const noCompression = 1;
  try {
    const { uri: jpegURI } = await ImageManipulator.manipulateAsync(originalURI, [{ rotate: 0 }], {
      compress: noCompression,
      format: ImageManipulator.SaveFormat.JPEG,
    });
    return jpegURI;
  } catch (err) {
    console.log(err);
  }
};
