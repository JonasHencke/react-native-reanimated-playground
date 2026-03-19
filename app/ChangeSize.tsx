import { Button, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function App() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(Math.random() * 100 + 50);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: "violet",
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}
