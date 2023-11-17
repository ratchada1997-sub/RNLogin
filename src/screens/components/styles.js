import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  txt1: {
    fontSize: 20,
    fontWeight: '500',
    color: '#3A3030',
    fontFamily: 'Kanit-Medium',
  },
  txt1_1: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#3A3030',
    fontFamily: 'Kanit-Regular',
  },
  txt2: {
    fontSize: 14,
    fontWeight: '500',
    color: '#677294',
    fontFamily: 'Kanit-Medium',
  },
  txt3: {
    fontSize: 16,
    fontWeight: '500',
    color: '#677294',
    fontFamily: 'Kanit-Medium',
  },

  viewRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  viewRow2: {
    flexDirection: 'row',
  },
  viewIn: {
    backgroundColor: '#0EBE7F',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  viewRow3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputSeach: {
    backgroundColor: '#fff',
    height: 54,
    borderRadius: 6,
    width: 280,
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
    fontFamily: 'Kanit-Regular',
  },
  viewContentTxtInput: {
    width: '85%',
    height: 54,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 5,
  },

  modalContent: {
    flex: 0.35,
    backgroundColor: '#fff',
    borderRadius: 4,
    justifyContent: 'space-around',
    paddingVertical: 5,
    marginHorizontal: 40,
  },
  btnDelete: {
    backgroundColor: 'red',
    width: 140,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  iconBin: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 140,
  },
});

export default styles;
