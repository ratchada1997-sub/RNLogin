import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Dot from './Dot';

export default function Pagination({data, x}) {
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        return <Dot key={index} index={index} x={x} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
