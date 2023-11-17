import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = ({navigation, title}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        height: '13%',
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingTop: 60,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={navigation}
        hitSlop={{right: 50, left: 50, bottom: 50}}>
        <Image source={require('../../assets/image/back.png')} />
        <Text style={[styles.txt1, {left: 20, color: '#fff'}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  txt1: {
    fontSize: 20,
    fontWeight: '500',
    color: '#3A3030',
    fontFamily: 'Kanit-Medium',
  },
});
