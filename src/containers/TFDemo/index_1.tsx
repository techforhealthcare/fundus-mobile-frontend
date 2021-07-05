import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import Section from "../../shared/components/Section";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Section title="Learn More">
        Read the docs to discover what to do next:
      </Section>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
