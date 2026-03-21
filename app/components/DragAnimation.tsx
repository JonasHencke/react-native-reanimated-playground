import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

export default function DragAnimation() {
  const pressed = useSharedValue<boolean>(false);

  const offset = useSharedValue<number>(0);

  const logDirection = (direction: "left" | "right") => {
    console.log(direction);
  };

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      offset.value = event.translationX;
    })
    .onFinalize((event) => {
      if (event.translationX > 0) {
        scheduleOnRN(logDirection, "right");
      } else if (event.translationX < 0) {
        scheduleOnRN(logDirection, "left");
      }

      offset.value = withSpring(0);
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value },
      { scale: withTiming(pressed.value ? 1.2 : 1) },
    ],
    backgroundColor: interpolateColor(
      offset.value,
      [-150, 0, 150],
      ["#ef4444", "#b58df1", "#22c55e"]
    ),
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.circle, animatedStyles]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  circle: {
    height: 120,
    width: 120,
    backgroundColor: "#b58df1",
    borderRadius: 500,
  },
});
