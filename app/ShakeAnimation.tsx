import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function ShakeAnimation() {
  const offset = useSharedValue<number>(0);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const OFFSET = 30;
  const TIME = 150;

  const handlePress = () => {
    offset.value = withSequence(
      // start from -OFFSET
      withTiming(-OFFSET, { duration: TIME / 2 }),
      // shake between -OFFSET and OFFSET 5 times
      withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
      // go back to 0 at the end
      withTiming(0, { duration: TIME / 2 })
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, style]} />
      <Button title="shake" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: "#b58df1",
  },
});
