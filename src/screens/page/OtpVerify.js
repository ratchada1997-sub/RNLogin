import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import styles from './styles';
import Header from '../components/Header';
import auth from '@react-native-firebase/auth';

const OtpVerify = ({navigation}) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [pin5, setPin5] = useState('');
  const [pin6, setPin6] = useState('');
  useEffect(() => {
    if (
      pin1 != '' &&
      pin2 != '' &&
      pin3 != '' &&
      pin4 != '' &&
      pin5 != '' &&
      pin6 != ''
    ) {
      setTimeout(() => {
        navigation.navigate('SetPin');
      }, 1000);
    }
  }, [pin6]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1, backgroundColor: '#ffff'}}>
        <Header navigation={() => navigation.goBack()} />
        <View style={{paddingHorizontal: 30, marginTop: 30}}>
          <Text style={[styles.txt1, {color: '#000', fontSize: 24}]}>
            ยืนยันตัวตน
          </Text>
          <Text
            style={[
              styles.txt1,
              {color: '#333333', fontSize: 16, marginTop: 10},
            ]}>
            กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ
          </Text>
          <Text
            style={[
              styles.txt1,
              {color: '#333333', fontSize: 16, marginTop: 10},
            ]}>
            082-XXX-8998
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignSelf: 'center',
          }}>
          <TextInput
            ref={ref1}
            autoFocus={true}
            style={styles.input}
            placeholder=""
            placeholderTextColor={'gray'}
            onChangeText={text => {
              setPin1(text);
              if (text != '') {
                ref2.current.focus();
              }
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            ref={ref2}
            style={styles.input}
            placeholder=""
            placeholderTextColor={'gray'}
            onChangeText={text => {
              setPin2(text);
              if (text != '') {
                ref3.current.focus();
              }
              if (text == '') {
                ref1.current.focus();
              }
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            ref={ref3}
            style={styles.input}
            placeholder=""
            placeholderTextColor={'gray'}
            onChangeText={text => {
              setPin3(text);
              if (text != '') {
                ref4.current.focus();
              }
              if (text == '') {
                ref2.current.focus();
              }
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            ref={ref4}
            style={styles.input}
            placeholder=""
            placeholderTextColor={'gray'}
            onChangeText={text => {
              setPin4(text);
              if (text != '') {
                ref5.current.focus();
              }
              if (text == '') {
                ref3.current.focus();
              }
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            ref={ref5}
            style={styles.input}
            placeholder=""
            placeholderTextColor={'gray'}
            onChangeText={text => {
              setPin5(text);
              if (text != '') {
                ref6.current.focus();
              }
              if (text == '') {
                ref4.current.focus();
              }
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            ref={ref6}
            // value={pin6}
            style={styles.input}
            placeholder=""
            placeholderTextColor={'gray'}
            onChangeText={text => {
              setPin6(text);
              if (text == '') {
                ref5.current.focus();
              }
              //   if (text != '') {
              //     setTimeout(() => {
              //       navigation.navigate('SetPin');
              //     }, 1000);
              //   }
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 100}}>
          <Text
            style={[
              styles.txt1,
              {color: '#333333', fontSize: 16, marginTop: 10},
            ]}>
            หากคุณไม่ได้รับรหัสส่งใหม่
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SetPin')}>
            <Text
              style={[
                styles.txt1,
                {color: '#1C665E', fontSize: 16, marginTop: 10},
              ]}>
              ส่งรหัสใหม่ (57)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OtpVerify;
