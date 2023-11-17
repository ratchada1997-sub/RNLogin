import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Language, colortheam} from '@recoil/atoms';
import {useRecoilState} from 'recoil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3C8',
  },
  container2: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: '#D9D9D9',
    backgroundColor: '#FFF3C8',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  languageButton: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    // backgroundColor: '#1C665E',
    backgroundColor: '#438DFB',
    width: '85%',
    alignItems: 'center',
  },
  txt1: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#fff',
    fontFamily: 'Kanit-Regular',
  },
  txt2: {
    fontSize: Platform.OS == 'android' ? 24 : 26,
    fontWeight: '600',
    color: '#2E2E2E',
    fontFamily: 'Kanit-Medium',
  },
  txt3: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#2E2E2E',
    fontFamily: 'Kanit-Regular',
  },
  line: {
    backgroundColor: '#D9D9D9',
    height: 1.5,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  btnTerms: {
    width: '47%',
    backgroundColor: '#fff',
    // borderColor: '#1C665E',
    borderColor: '#438DFB',
    borderWidth: 1,
    // padding: 10,
    // margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
  },
  viewCard1: {
    backgroundColor: '#fff',
    // height: '90%',
    flex: 0.9,
    padding: 25,
    justifyContent: 'space-between',
  },
  textBox: {
    height: 45,
    width: 35,
    borderColor: 'red',
    borderWidth: 2,
  },
  input: {
    width: 40,
    height: 45,
    borderColor: '#B3B6B7',
    borderBottomWidth: 1.5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 30,
    fontSize: 22,
    fontWeight: '500',
    color: '#333333',
    fontFamily: 'Kanit-Medium',
  },
});

export default styles;
