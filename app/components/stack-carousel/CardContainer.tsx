import React from "react";
import { ImageSourcePropType } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Card from "./Card";

type CardContainerProps = {
  data: {
    image: ImageSourcePropType;
  }[];
  maxVisibleItems: number;
};

const CardContainer = ({ data, maxVisibleItems }: CardContainerProps) => {
  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(0);
  return (
    <>
      {data.map((item, index) => {
        return (
          <Card
            maxVisibleItems={maxVisibleItems}
            item={item}
            index={index}
            dataLength={data.length}
            animatedValue={animatedValue}
            currentIndex={currentIndex}
            prevIndex={prevIndex}
            key={index}
          />
        );
      })}
    </>
  );
};

export default CardContainer;
