import React, { useEffect } from "react";
import { View } from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";
import Card from "./Card";

export default function CardStack({
  data,
  maxVisibleItems,
}: {
  data: any[];
  maxVisibleItems: number;
}) {
  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentIndex.value + 1;

      if (nextIndex < data.length) {
        prevIndex.value = currentIndex.value;
        animatedValue.value = withTiming(nextIndex, { duration: 500 });
        currentIndex.value = nextIndex;
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {data.map((item, index) => (
        <Card
          key={index}
          item={item}
          index={index}
          dataLength={data.length}
          maxVisibleItems={maxVisibleItems}
          animatedValue={animatedValue}
          currentIndex={currentIndex}
          prevIndex={prevIndex}
        />
      ))}
    </View>
  );
}
