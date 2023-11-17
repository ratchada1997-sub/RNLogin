import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {Language, colortheam} from '@recoil/atoms';
import {useRecoilState} from 'recoil';
import I18n from 'utils/I18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import ToggleSwitch from 'toggle-switch-react-native';
const SelectLanguage = ({navigation}) => {
  const [language, setlanguage] = useState('TH');
  const [toggle, setToggle] = useState(false);
  const [recoil_Language, setRecoil_Language] = useRecoilState(Language);
  const [recoil_colortheam, setRecoil_Colortheam] = useRecoilState(colortheam);
  const changelanguage = val => {
    AsyncStorage.setItem('language', val);
    I18n.changelanguage(val);
    setlanguage(val);
    setRecoil_Language(val);
    // navigation.goBack();
  };
  console.log('AAAAA', recoil_colortheam);
  const changeTheam = val => {
    AsyncStorage.setItem('theam', val);
    setRecoil_Colortheam(val);
    // navigation.goBack();
  };

  useEffect(() => {
    AsyncStorage.getItem('language', (error, results) => {
      console.log('language', results);
      if (results == null) {
        changelanguage(language);
      } else {
        changelanguage(results);
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      {/* <ToggleSwitch
        isOn={toggle}
        onColor="green"
        offColor="gray"
        labelStyle={{color: 'black', fontWeight: '900'}}
        size="small"
        onToggle={isOn => {
          setToggle(isOn);
          if (isOn == true) {
            changeTheam('#438DFB');
          }
          if (isOn == false) {
            changeTheam('#1C665E');
          }
          console.log('issss', isOn);
        }}
      /> */}
      <View style={{width: '80%'}}>
        <Text style={styles.txt2}>ยินดีต้อนรับ</Text>
        <Text style={styles.txt3}>กรุณาเลือกภาษา</Text>
      </View>
      <View style={{marginTop: 70}} />
      <Pressable
        style={({pressed}) => [
          styles.languageButton,
          {opacity: pressed ? 0.6 : 1},
        ]}
        onPress={() => [
          changelanguage('EN'),
          navigation.navigate('TermsOfService'),
        ]}>
        <Text style={styles.txt1}>English</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [
          styles.languageButton,
          {opacity: pressed ? 0.6 : 1},
        ]}
        onPress={() => [
          changelanguage('TH'),
          navigation.navigate('TermsOfService'),
        ]}>
        <Text style={styles.txt1}>ไทย</Text>
      </Pressable>
    </View>
  );
};

export default SelectLanguage;
