import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

const SetfingerPrint = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        // alignItems: 'center',
      }}>
      <View style={{paddingHorizontal: 30, marginTop: 20}}>
        <Text style={[styles.txt1, {color: '#000', fontSize: 24}]}>
          Touch ID
        </Text>
        <Text
          style={[
            styles.txt1,
            {color: '#333333', fontSize: 16, marginTop: 10},
          ]}>
          {' ตั้งค่าล็อคอินด้วยลายนิ้วมือ\nเพื่อการเข้าถึงที่รวดเร็วขึ้น'}
        </Text>
      </View>
      <View style={{alignSelf: 'center', marginTop: 50}}>
        <Image source={require('../../image/fg.png')} />
      </View>
      <View>
        <Pressable
          style={({pressed}) => [
            styles.languageButton,
            {opacity: pressed ? 0.6 : 1, alignSelf: 'center'},
          ]}>
          <Text style={styles.txt1}>ตั้งค่าลายนิ้วมือ</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('SetPin', {type: 1})}
          style={({pressed}) => [
            {opacity: pressed ? 0.6 : 1, alignSelf: 'center', marginTop: 10},
          ]}>
          <Text style={[styles.txt1, {color: '#1C665E'}]}>ข้าม</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SetfingerPrint;
