import {
  ImageBackground,
  StyleSheet,
  Button,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
const FeedIndex = () => {
  const width = useSharedValue(50);
  return (
    <ImageBackground
      source={require('../../image/bg3.png')}
      style={{flex: 1}}></ImageBackground>
  );
};

export default FeedIndex;

const styles = StyleSheet.create({});
