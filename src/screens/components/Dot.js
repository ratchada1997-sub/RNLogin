import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
export default function Dot({index, x}) {
  const {width: screen_width} = useWindowDimensions();
  const animatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      x.value,
      [
        (index - 1) * screen_width,
        index * screen_width,
        (index + 1) * screen_width,
      ],
      [10, 20, 10],
      Extrapolate.CLAMP,
    );
    const opacityAnimation = interpolate(
      x.value,
      [
        (index - 1) * screen_width,
        index * screen_width,
        (index + 1) * screen_width,
      ],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );
    return {
      width: widthAnimation,
      opacity: opacityAnimation,
    };
  });

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0, screen_width, 2 * screen_width],
      ['#68B984', '#1363DF', '#f15937'],
    );
    return {
      backgroundColor: backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.dot, animatedDotStyle, animatedColor]} />
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
