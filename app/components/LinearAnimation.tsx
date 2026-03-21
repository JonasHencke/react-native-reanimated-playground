import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const BOX_SIZE = 80;
const BOX_MARGIN = 20;
const ANIMATION_DURATION = 2000;

export default function LinearAnimation() {
  const { width } = useWindowDimensions();
  const maxTranslateX = Math.max(0, width / 2 - (BOX_SIZE / 2 + BOX_MARGIN));
  const defaultTranslateX = useSharedValue<number>(maxTranslateX);
  const heavyTranslateX = useSharedValue<number>(maxTranslateX);
  const slowTranslateX = useSharedValue<number>(maxTranslateX);
  const fastTranslateX = useSharedValue<number>(maxTranslateX);

  const defaultAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultTranslateX.value }],
  }));
  const heavyAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: heavyTranslateX.value }],
  }));
  const slowAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: slowTranslateX.value }],
  }));
  const fastAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: fastTranslateX.value }],
  }));

  React.useEffect(() => {
    defaultTranslateX.value = maxTranslateX;
    defaultTranslateX.value = withRepeat(withSpring(-maxTranslateX), -1, true);
    heavyTranslateX.value = maxTranslateX;
    heavyTranslateX.value = withRepeat(
      withSpring(-maxTranslateX, {
        mass: 10,
        damping: 40,
      }),
      -1,
      true
    );
    slowTranslateX.value = maxTranslateX;
    slowTranslateX.value = withRepeat(
      withTiming(-maxTranslateX, {
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
      }),
      -1,
      true
    );
    fastTranslateX.value = maxTranslateX;
    fastTranslateX.value = withRepeat(
      withTiming(-maxTranslateX, {
        duration: ANIMATION_DURATION / 2,
      }),
      -1,
      true
    );
  }, [
    heavyTranslateX,
    defaultTranslateX,
    slowTranslateX,
    fastTranslateX,
    maxTranslateX,
  ]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, defaultAnimatedStyle]}>
        <Text style={styles.text}>Default</Text>
      </Animated.View>
      <Animated.View style={[styles.box, heavyAnimatedStyle]}>
        <Text style={styles.text}>Heavy</Text>
      </Animated.View>
      <Animated.View style={[styles.box, slowAnimatedStyle]}>
        <Text style={styles.text}>Slow</Text>
      </Animated.View>
      <Animated.View style={[styles.box, fastAnimatedStyle]}>
        <Text style={styles.text}>Fast</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  box: {
    height: BOX_SIZE,
    width: BOX_SIZE,
    margin: BOX_MARGIN,
    borderWidth: 1,
    borderColor: "#b58df1",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#b58df1",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
