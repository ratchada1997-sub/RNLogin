import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const RenderItem = ({item, index, x}) => {
  const {width: screen_width} = useWindowDimensions();

  const lottieAnimationStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * screen_width,
        index * screen_width,
        (index + 1) * screen_width,
      ],
      [200, 0, -200],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{translateY: translateYAnimation}],
    };
  });

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 1) * screen_width,
        index * screen_width,
        (index + 1) * screen_width,
      ],
      [1, 4, 4],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{scale: scale}],
    };
  });
  return (
    <View style={[styles.itemContainer, {width: screen_width}]}>
      <View style={styles.circleContain}>
        <Animated.View
          style={[
            {
              width: screen_width,
              height: screen_width,
              backgroundColor: item.backgroundColor,
              borderRadius: screen_width / 2,
            },
            circleAnimation,
          ]}
        />
      </View>
      <Animated.View style={lottieAnimationStyle}>
        <LottieView
          source={item.animation}
          style={{width: screen_width * 0.9, height: screen_width * 0.9}}
          autoPlay
          loop
        />
      </Animated.View>
      <Text style={[styles.itemText, {color: item.textColor}]}>
        {item.text}
      </Text>
    </View>
  );
};

export default RenderItem;
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 120,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 44,
    marginBottom: 10,
    marginHorizontal: 20,
    fontFamily: 'Kanit-Medium',
  },
  circleContain: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
