//SOURCE: https://github.com/Rakha112/react-native-animation/tree/main/season1/src/10-React-Native-Stack-Carousel

import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import CardContainer from "./CardContainer";

const StackCarouselScreen = () => {
  const data = [
    {
      image: require("/Users/jonas/Documents/react-native-reanimated-playground/assets/images/android-icon-background.png"),
    },
    {
      image: require("/Users/jonas/Documents/react-native-reanimated-playground/assets/images/android-icon-background.png"),
    },
    {
      image: require("/Users/jonas/Documents/react-native-reanimated-playground/assets/images/android-icon-background.png"),
    },
    {
      image: require("/Users/jonas/Documents/react-native-reanimated-playground/assets/images/android-icon-background.png"),
    },
    {
      image: require("/Users/jonas/Documents/react-native-reanimated-playground/assets/images/android-icon-background.png"),
    },
    {
      image: require("/Users/jonas/Documents/react-native-reanimated-playground/assets/images/android-icon-background.png"),
    },
    {
      image: require("/Users/jonas/Documents/react-native-reanimated-playground/assets/images/android-icon-background.png"),
    },
    {
      image: require("/Users/jonas/Documents/react-native-reanimated-playground/assets/images/android-icon-background.png"),
    },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <CardContainer data={data} maxVisibleItems={3} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  ViewContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48,
    alignItems: "center",
  },
});

export default function ProgressBarScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Progress Bar" }} />
      <View style={styles.ViewContainer}>
        <StackCarouselScreen />
      </View>
    </>
  );
}
