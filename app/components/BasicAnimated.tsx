import Animated from "react-native-reanimated";
import { View } from "react-native";
import { Stack } from "expo-router";

export default function BaiscCube() {
  return (
    <>
      <Stack.Screen options={{ title: "Animated.View" }} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "violet",
          }}
        />
      </View>
    </>
  );
}
