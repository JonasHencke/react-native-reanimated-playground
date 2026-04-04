import React, { useEffect, useRef } from "react";
import {
  Animated,
  DimensionValue,
  Easing,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

type SkeletonPlaceholderProps = {
  width: DimensionValue;
  height: number;
  borderRadius?: number;
  backgroundColor?: string;
  minOpacity?: number;
  maxOpacity?: number;
  duration?: number;
  style?: StyleProp<ViewStyle>;
};
export default function SkeletonPlaceholderDemo() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SkeletonPlaceholder width={150} height={150} borderRadius={8} />
    </View>
  );
}
export function SkeletonPlaceholder({
  width,
  height,
  borderRadius = 5,
  backgroundColor = "#e0e0e0",
  minOpacity = 0.45,
  maxOpacity = 0.85,
  duration = 850,
  style,
}: SkeletonPlaceholderProps) {
  const animatedOpacity = useRef(new Animated.Value(minOpacity)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedOpacity, {
          toValue: maxOpacity,
          duration,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animatedOpacity, {
          toValue: minOpacity,
          duration,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    loop.start();

    return () => {
      loop.stop();
    };
  }, [animatedOpacity, duration, maxOpacity, minOpacity]);

  return (
    <Animated.View
      style={[
        {
          width,
          height,
          borderRadius,
          backgroundColor,
          opacity: animatedOpacity,
        },
        style,
      ]}
    />
  );
}
