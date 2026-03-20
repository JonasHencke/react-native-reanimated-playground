import { Link, Stack } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const demos = [
  { href: "/BasicAnimated", label: "Basic Animated Box" },
  { href: "/ChangeSize", label: "Change Size" },
  { href: "/ExpandingCircle", label: "Expanding Circle" },
  { href: "/LinearAnimation", label: "Linear Animation" },
  { href: "/ShakeAnimation", label: "Shake Animation" },
  { href: "/TapGesture", label: "Tap Gesture" },
  { href: "/DragGesture", label: "Drag Gesture" },
  { href: "/DragAnimation", label: "Drag Animation" },
];

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: "Hub" }} />
      <View style={styles.container}>
        <Text style={styles.title}>Reanimated Playground</Text>
        <Text style={styles.subtitle}>Pick a demo screen</Text>

        {demos.map((demo) => (
          <Link key={demo.href} href={demo.href as any} asChild>
            <Pressable style={styles.card}>
              <Text style={styles.cardText}>{demo.label}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 8,
  },
  card: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#eee",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
