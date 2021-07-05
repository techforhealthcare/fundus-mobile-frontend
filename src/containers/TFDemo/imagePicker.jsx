import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";

const AlbumPicker = async () => {
  return launchImageLibraryAsync({
    mediaTypes: MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
  });
};

export default AlbumPicker;
