import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type ProgressBarProps = {
  progress: number; // 0 to 1
  fillColor?: string;
};

export function ProgressBar({
  progress,
  fillColor = "#4A90D9",
}: ProgressBarProps) {
  const animatedProgress = useSharedValue(progress);

  useEffect(() => {
    animatedProgress.value = withTiming(progress, { duration: 400 });
  }, [progress, animatedProgress]);

  const animatedFill = useAnimatedStyle(() => ({
    width: `${animatedProgress.value * 100}%`,
  }));

  return (
    <View style={styles.track}>
      <Animated.View
        style={[styles.fill, { backgroundColor: fillColor }, animatedFill]}
      />
    </View>
  );
}

type ProgressBarWithButtonProps = {
  goal?: number;
  fillColor?: string;
};

export function ProgressBarWithButton({
  goal = 10,
  fillColor = "#4A90D9",
}: ProgressBarWithButtonProps) {
  const [steps, setSteps] = useState(0);

  const handleAdd = () => {
    setSteps((prev) => Math.min(prev + 1, goal));
  };

  return (
    <View style={styles.widgetContainer}>
      <Text style={styles.label}>
        {steps} / {goal}
      </Text>

      <ProgressBar progress={steps / goal} fillColor={fillColor} />

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: fillColor },
          pressed && styles.buttonPressed,
        ]}
        onPress={handleAdd}
        disabled={steps >= goal}
      >
        <Text style={styles.buttonText}>Add Progress</Text>
      </Pressable>
    </View>
  );
}

export default function ProgressBarScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Progress Bar" }} />
      <View style={styles.container}>
        <ProgressBarWithButton />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48,
    alignItems: "center",
  },
  widgetContainer: {
    width: "100%",
    gap: 24,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
  },
  track: {
    width: "100%",
    height: 10,
    borderRadius: 5,
    backgroundColor: "#C7D3EB",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 5,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
