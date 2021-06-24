import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type sectionTypes = {
  children: ReactNode;
  title: string;
};

const Section = ({ children, title }: sectionTypes) => {
  return (
    <View style={styles.sectionContainer}>
      <Text>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
});

export default Section;
