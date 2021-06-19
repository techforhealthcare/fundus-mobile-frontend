import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MobileNetDemo from './src/screens/TFDemo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MobileNetDemo />
      {/* <View style={styles.container}> */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
});
