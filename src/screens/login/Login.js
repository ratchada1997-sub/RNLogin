import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'react-native-checkbox';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(true);
  const handleLogin = () => {
    // Implement your login logic here
    if (email === 'user@example.com' && password === 'password') {
      // Successful login, perform navigation or other actions
      console.log('Login successful');
    } else {
      // Handle invalid login credentials
      console.log('Invalid credentials');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="ชื่อผู้ใช้งาน"
          placeholderTextColor={'gray'}
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, {marginTop: 30}]}
          placeholder="รหัสผ่าน"
          placeholderTextColor={'gray'}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <View style={styles.viewRow2}>
          <View style={styles.viewRow3}>
            <TouchableOpacity onPress={() => setCheck(!check)}>
              {check ? (
                <Image
                  source={require('../../image/check1.png')}
                  style={{width: 24, height: 24}}
                />
              ) : (
                <Image
                  source={require('../../image/check2.png')}
                  style={{width: 24, height: 24}}
                />
              )}
            </TouchableOpacity>
            <Text
              style={[
                styles.txt1,
                {color: 'gray', fontSize: 17, marginLeft: 8},
              ]}>
              บันทึกการเข้าสู่ระบบ
            </Text>
          </View>

          <Text style={[styles.txt1, {color: 'gray', fontSize: 17}]}>
            ลืมรหัสผ่าน?
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('SendOtp')}
          style={({pressed}) => [
            styles.btn,
            {marginTop: 40, opacity: pressed ? 0.6 : 1},
          ]}>
          <Text style={styles.txt1}>เข้าสู่ระบบ</Text>
        </Pressable>
        <View style={styles.viewRow1}>
          <View style={styles.line} />
          <Text style={[styles.txt1, {color: 'gray'}]}>ไม่มีบัญชีผู้ใช้</Text>
          <View style={styles.line} />
        </View>
        <Pressable
          style={({pressed}) => [
            styles.btn,
            {
              marginTop: 30,
              backgroundColor: '#ffff',
              borderColor: '#438DFB',
              borderWidth: 1,
              opacity: pressed ? 0.6 : 1,
            },
          ]}>
          <Text style={[styles.txt1, {color: '#438DFB'}]}>
            เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้
          </Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },

  input: {
    width: '100%',
    height: 45,
    borderColor: '#B3B6B7',
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
    fontFamily: 'Kanit-Medium',
  },
  btn: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    // backgroundColor: '#1C665E',
    backgroundColor: '#438DFB',
    width: '100%',
    alignItems: 'center',
  },
  txt1: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#fff',
    fontFamily: 'Kanit-Regular',
  },
  line: {
    backgroundColor: '#B3B6B7',
    height: 1,
    width: '40%',
    marginHorizontal: 10,
  },
  viewRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    // backgroundColor: 'red',
    marginHorizontal: 30,
  },
  viewRow2: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
    marginHorizontal: 30,
    justifyContent: 'space-between',
    width: '100%',
  },
  viewRow3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
