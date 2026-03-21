//SOURCE: https://codewithbeto.dev/blog/glow-input-reanimated-css
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Animated, { type CSSAnimationKeyframes } from "react-native-reanimated";

const GLOW_COLOR = "#6C63FF";

const glowIn: CSSAnimationKeyframes = {
  from: { boxShadow: `0 0 0 0 ${GLOW_COLOR}00` },
  to: { boxShadow: `0 0 32px 4px ${GLOW_COLOR}80` },
};

const glowOut: CSSAnimationKeyframes = {
  from: { boxShadow: `0 0 32px 4px ${GLOW_COLOR}59` },
  to: { boxShadow: `0 0 0 0 ${GLOW_COLOR}00` },
};

export default function GlowInput() {
  const [text, setText] = useState("");
  const hasText = text.length > 0;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.glow,
          {
            animationName: hasText ? glowIn : glowOut,
            animationDuration: hasText ? "400ms" : "500ms",
            animationFillMode: "forwards",
            animationTimingFunction: "ease-out",
          },
        ]}
      >
        <TextInput
          autoFocus
          value={text}
          onChangeText={setText}
          placeholder="Type something..."
          placeholderTextColor="#999"
          cursorColor={GLOW_COLOR}
          style={styles.input}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  glow: {
    borderRadius: 999,
  },
  input: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#1c1c1e",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#333",
  },
});
