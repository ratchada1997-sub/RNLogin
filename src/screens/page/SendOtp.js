import {View, Text, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Header from '../components/Header';
import {Image} from 'react-native';
import auth from '@react-native-firebase/auth';
const SendOtp = ({navigation}) => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('123456');

  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log('confirmation.', confirmation);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      const respones = await confirm.confirm('222222');
      console.log('respones.', respones);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
      <Header navigation={() => navigation.goBack()} />
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          // justifyContent: 'center',
          //   backgroundColor: 'red',
        }}>
        <Image
          source={require('../../image/pin.png')}
          style={{marginTop: 50}}
        />
        <Text
          style={[styles.txt1, {color: '#000', fontSize: 24, marginTop: 40}]}>
          OTPจะถูกส่งไปที่เบอร์โทรศัพท์
        </Text>
        <Text
          style={[
            styles.txt1,
            {color: '#1C665E', fontSize: 24, marginTop: 10},
          ]}>
          094-XXX-2381
        </Text>
        <Pressable
          onPress={() => navigation.navigate('OtpVerify')}
          //   onPress={() => signInWithPhoneNumber('+66 946652381')} //+66 94-665-2381 //843414844
          style={({pressed}) => [
            styles.languageButton,
            {opacity: pressed ? 0.6 : 1, marginTop: 60},
          ]}>
          <Text style={styles.txt1}>ขอรหัส OTP</Text>
        </Pressable>
        {/* <Pressable
          onPress={() => confirmCode()}
          style={({pressed}) => [
            styles.languageButton,
            {opacity: pressed ? 0.6 : 1, marginTop: 60},
          ]}>
          <Text style={styles.txt1}> OTP</Text>
        </Pressable> */}
        <Text
          style={[styles.txt1, {color: 'gray', fontSize: 14, marginTop: 10}]}>
          กรณีกรอกเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXXX
        </Text>
      </View>
    </View>
  );
};

export default SendOtp;
