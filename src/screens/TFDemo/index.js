// Referenced from https://heartbeat.fritz.ai/image-classification-on-react-native-with-tensorflow-js-and-mobilenet-48a39185717c

import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, StatusBar, Image, TouchableOpacity } from 'react-native';

import styles from '../../styles/TFDemoStyles';
import { fileExtensionFromString } from '../../utils/generalUtils';
import { handlePermissions } from './permissions';

import { AlbumPicker } from './imagePicker';
import { isJPEG, invalidImageFormatAlert, convertImageToJpeg } from './imageConverter';
import { useClassifier } from './tfHooks';

const App = () => {
  const [image, setImage] = useState(null);
  const { isTfReady, isModelReady, predictions, setClassifierImageInput } = useClassifier();

  // regular useEffect on component load
  useEffect(() => {
    (async () => {
      handlePermissions();
    })();
  }, []);

  // ensures classifyImage is executed only after setImage is completed to prevent race conditions
  useEffect(() => {
    (async () => {
      if (image) {
        setClassifierImageInput(image);
      }
    })();
  }, [image]);

  const selectImage = async () => {
    try {
      const { cancelled, uri = null } = await AlbumPicker();
      if (!cancelled) {
        const extensionOfURI = fileExtensionFromString(uri);

        if (isJPEG(extensionOfURI)) {
          setImage({ uri });
          return;
        }

        const convertedImageURI = await convertImageToJpeg(uri);
        if (convertedImageURI) {
          setImage({ uri: convertedImageURI });
          return;
        }

        invalidImageFormatAlert(extensionOfURI);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderPrediction = (prediction) => {
    return (
      <Text key={prediction.className} style={styles.text}>
        {prediction.className}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.loadingContainer}>
        <Text style={styles.text}>TFJS ready? {isTfReady ? <Text>✅</Text> : ''}</Text>
        <View style={styles.loadingModelContainer}>
          <Text style={styles.text}>Model ready? </Text>
          {isModelReady ? <Text style={styles.text}>✅</Text> : <ActivityIndicator size="small" />}
        </View>
      </View>
      <TouchableOpacity
        style={styles.imageWrapper}
        onPress={isModelReady ? selectImage : undefined}
      >
        {image && <Image source={image} style={styles.imageContainer} />}
        {isModelReady && !image && <Text style={styles.transparentText}>Tap to choose image</Text>}
      </TouchableOpacity>
      <View style={styles.predictionWrapper}>
        {isModelReady && image && (
          <Text style={styles.text}>{predictions ? 'Identified: ' : 'Identifying...'}</Text>
        )}
        {isModelReady && predictions && predictions.map((p) => renderPrediction(p))}
      </View>
    </View>
  );
};

export default App;
