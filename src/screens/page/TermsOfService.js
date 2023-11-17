import {View, Text, Pressable, Platform} from 'react-native';
import React from 'react';
import styles from './styles';
import I18n from 'utils/I18n';
const TermsOfService = ({navigation}) => {
  return (
    <View style={[styles.container2]}>
      <View style={styles.viewCard1}>
        <View>
          <Text style={[styles.txt2, {alignSelf: 'flex-start'}]}>
            {I18n.t('translate_Terms_of_service')}
          </Text>
          <View style={styles.line} />
          <Text
            style={[
              styles.txt3,
              {color: '#494949', fontSize: Platform.OS == 'android' ? 16 : 18},
            ]}>
            {I18n.t('translate_Terms_of_service2')}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: Platform.OS == 'android' ? 10 : 50,
          }}>
          <Pressable
            style={({pressed}) => [
              styles.btnTerms,
              {
                opacity: pressed ? 0.6 : 1,
              },
            ]}>
            <Text style={[styles.txt1, {color: '#438DFB'}]}>ปฏิเสธ</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Login')}
            style={({pressed}) => [
              styles.btnTerms,
              {opacity: pressed ? 0.6 : 1, backgroundColor: '#438DFB'},
            ]}>
            <Text style={styles.txt1}>ยอมรับ</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default TermsOfService;
