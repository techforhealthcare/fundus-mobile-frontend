import { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { tensor3d, ready } from '@tensorflow/tfjs';
import { fetch } from '@tensorflow/tfjs-react-native';
import { load as mobileNetLoad } from '@tensorflow-models/mobilenet';
import { decode as jpegDecode } from 'jpeg-js';

function dropAlphaChannelForMobileNet(width, height, data) {
  const buffer = new Uint8Array(width * height * 3);
  let originalDataOffset = 0;
  for (let i = 0; i < buffer.length; i += 3) {
    buffer[i] = data[originalDataOffset];
    buffer[i + 1] = data[originalDataOffset + 1];
    buffer[i + 2] = data[originalDataOffset + 2];
    originalDataOffset += 4;
  }
  return buffer;
}

const imageToTensor = (rawImageData) => {
  const TO_UINT8ARRAY = true;
  const { width, height, data } = jpegDecode(rawImageData, TO_UINT8ARRAY);
  const buffer = dropAlphaChannelForMobileNet(width, height, data);
  return tensor3d(buffer, [height, width, 3]);
};

classifyImage = async (image, model) => {
  try {
    const imageAssetPath = Image.resolveAssetSource(image);
    const { uri } = imageAssetPath;
    const response = await fetch(uri, {}, { isBinary: true });
    const rawImageData = await response.arrayBuffer();
    const imageTensor = imageToTensor(rawImageData);
    const predictions = await model.classify(imageTensor);
    console.log(predictions);
    return predictions;
  } catch (error) {
    console.log(error);
  }
};

const useTFReady = () => {
  const [tfReady, setTFReady] = useState(false);
  useEffect(() => {
    (async () => {
      await ready();
      setTFReady(true);
    })();
  }, []);

  return tfReady;
};

const useModel = () => {
  const [model, setModel] = useState(null);
  useEffect(() => {
    (async () => {
      const loadedModel = await mobileNetLoad();
      setModel(loadedModel);
    })();
  }, []);

  return model;
};

export const useClassifier = () => {
  const isTfReady = useTFReady();
  const model = useModel();
  const [predictions, setPredictions] = useState(null);
  const [image, setClassifierImageInput] = useState(null);

  useEffect(() => {
    (async () => {
      setPredictions(null);
      if (!!isTfReady && !!model) {
        const predictions_ = await classifyImage(image, model);
        setPredictions(predictions_);
      }
    })();
  }, [image]);

  return { isTfReady, isModelReady: !!model, predictions, setClassifierImageInput };
};
