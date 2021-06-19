import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';

export const AlbumPicker = async () => {
  return await launchImageLibraryAsync({
    mediaTypes: MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
  });
};
