import { Link, Stack } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const demos = [
  { href: "/components/BasicAnimated", label: "Basic Animated Box" },
  { href: "/components/ChangeSize", label: "Change Size" },
  { href: "/components/ExpandingCircle", label: "Expanding Circle" },
  { href: "/components/LinearAnimation", label: "Linear Animation" },
  { href: "/components/ShakeAnimation", label: "Shake Animation" },
  { href: "/components/TapGesture", label: "Tap Gesture" },
  { href: "/components/DragGesture", label: "Drag Gesture" },
  { href: "/components/DragAnimation", label: "Drag Animation" },
  { href: "/components/GlowInput", label: "Glow Input" },
  { href: "/components/FlipCard", label: "Flip Card" },
  { href: "/components/FloatingActionButton", label: "Floating Action Button" },
];

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: "Hub" }} />
      <ScrollView>
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
      </ScrollView>
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
