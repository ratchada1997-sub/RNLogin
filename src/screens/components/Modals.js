import {Pressable, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import styles from './styles';
const Modals = ({
  lottieView,
  title,
  btnOne,
  btnTwo,
  isVisible,
  onPressCancle,
  onPressOk,
  textCancle,
  textOk,
  bgBtnCancle,
  bgBtnOk,
  frist,
  second,
  onPressCancle1,
}) => {
  const RenderDelete = () => {
    return (
      <>
        {frist && (
          <View style={styles.modalContent}>
            {lottieView}
            <Text style={[styles.txt1, {textAlign: 'center', marginTop: 20}]}>
              {title}
            </Text>
            {btnOne && (
              <View style={[styles.viewRow1, {justifyContent: 'space-evenly'}]}>
                <Pressable
                  onPress={onPressCancle}
                  style={({pressed}) => [
                    styles.btnDelete,
                    {opacity: pressed ? 0.6 : 1, backgroundColor: '#D0D4CA'},
                  ]}>
                  <Text style={styles.txt1}>{'ยกเลิก'}</Text>
                </Pressable>
              </View>
            )}
            {btnTwo && (
              <View style={[styles.viewRow1, {justifyContent: 'space-evenly'}]}>
                <Pressable
                  onPress={onPressCancle}
                  style={({pressed}) => [
                    styles.btnDelete,
                    {opacity: pressed ? 0.6 : 1, backgroundColor: bgBtnCancle},
                  ]}>
                  <Text style={styles.txt1}>{textCancle}</Text>
                </Pressable>
                <Pressable
                  onPress={onPressOk}
                  style={({pressed}) => [
                    styles.btnDelete,
                    {opacity: pressed ? 0.6 : 1, backgroundColor: bgBtnOk},
                  ]}>
                  <Text style={[styles.txt1, {color: '#fff'}]}>{textOk}</Text>
                </Pressable>
              </View>
            )}
          </View>
        )}
        {second && (
          <View style={[styles.modalContent, {paddingVertical: 15}]}>
            {lottieView}
            <Text
              style={[
                styles.txt1,
                {textAlign: 'center', marginBottom: 5, fontSize: 18},
              ]}>
              {title}
            </Text>
            <Text style={[styles.txt1_1, {textAlign: 'center', fontSize: 14}]}>
              {'เข้าใช้งานด้วย Touch ID หรือ\nยกเลิกเพื่อกลับไปใช้รหัส PIN'}
            </Text>

            <View style={[{alignItems: 'center'}]}>
              <Pressable
                onPress={onPressCancle1}
                style={({pressed}) => [
                  styles.btnDelete,
                  {opacity: pressed ? 0.6 : 1, backgroundColor: '#D0D4CA'},
                ]}>
                <Text style={[styles.txt1_1, {color: 'blue'}]}>
                  {'Enter Password'}
                </Text>
              </Pressable>
              <Pressable
                onPress={onPressCancle}
                style={({pressed}) => [
                  styles.btnDelete,
                  {opacity: pressed ? 0.6 : 1, backgroundColor: '#D0D4CA'},
                ]}>
                <Text style={styles.txt1_1}>{'ยกเลิก'}</Text>
              </Pressable>
            </View>
          </View>
        )}
      </>
    );
  };
  return (
    <Modal isVisible={isVisible}>
      <RenderDelete />
    </Modal>
  );
};

export default Modals;
