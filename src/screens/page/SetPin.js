import Icon from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useRef, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
} from 'react-native';
import ReactNativePinView from 'react-native-pin-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import Modals from 'components/Modals';
const SetPin = ({navigation, route}) => {
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 8) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }

    if (route?.params?.type == 1) {
      toggleModal();
    }
  }, [enteredPin, route?.params?.type]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Modals
        second
        isVisible={isModalVisible}
        onPressCancle={() => toggleModal()}
        title={'Touch ID for\nCGS Application'}
        lottieView={
          <Image
            source={require('../../image/fg.png')}
            style={{width: 40, height: 40, alignSelf: 'center'}}
          />
        }
      />
      <Text style={[styles.txt3, {paddingVertical: 20}]}>
        {route?.params?.type == 1 ? (
          <>{'  กรุณากรอกรหัส PIN'}</>
        ) : (
          <>{'  ตั้งรหัส PIN CODE'}</>
        )}
      </Text>
      <ReactNativePinView
        inputSize={32}
        ref={pinView}
        pinLength={6}
        buttonSize={60}
        onValueChange={value => {
          setEnteredPin(value), console.log('vale', value);
          if (value == '444444') {
            setTimeout(() => {
              navigation.navigate('SetfingerPrint');
              pinView.current.clearAll();
            }, 1000);
          }
        }}
        buttonAreaStyle={{
          marginTop: 24,
        }}
        inputAreaStyle={{
          marginBottom: 24,
        }}
        inputViewEmptyStyle={{
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: '#333333',
        }}
        inputViewFilledStyle={{
          backgroundColor: '#333333',
        }}
        buttonViewStyle={{
          borderWidth: 1,
          borderColor: '#333333',
        }}
        buttonTextStyle={{
          color: '#333333',
        }}
        onButtonPress={key => {
          if (key === 'custom_left') {
            pinView.current.clear();
          }
          if (key === 'custom_right') {
            // alert('Entered Pin: ' + enteredPin);
          }
          if (key === 'three') {
            // alert('You just click to 3');
          }
        }}
        customLeftButton={
          showRemoveButton ? <Text style={styles.txt2}>X</Text> : undefined
        }
        customRightButton={
          route?.params?.type == 1 ? (
            <Image
              source={require('../../image/fg.png')}
              style={{width: 40, height: 40}}
            />
          ) : undefined
        }
      />
    </View>
  );
};

export default SetPin;
