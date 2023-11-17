import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {TextInput} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Modals from 'components/Modals';
import LottieView from 'lottie-react-native';
const EditProduct = ({navigation, route}) => {
  const [product, setProduct] = useState(route?.params?.data?.product_name);
  const [product_id, setProduct_id] = useState(route?.params?.data?.product_id);
  const [price, setPrice] = useState(route?.params?.data?.price);
  const [quantity, setQuantity] = useState(route?.params?.data?.total_in);
  const [description, setDescription] = useState(
    route?.params?.data?.description,
  );
  const [image, setImage] = useState(route?.params?.data?.thumbnail);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  async function _editProducts() {
    try {
      const url = 'http://localhost:3000/products/update';
      const requestBody = {
        id: route?.params?.data?.id,
        product_id: product_id,
        product_name: product,
        description: description,
        price: price,
        total_in: route?.params?.data?.total_in,
        thumbnail: image,
        total_out: 0,
      };
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (response.ok) {
        if (data.status == '01') {
          route?.params?.getData();
          toggleModal();
          setTimeout(() => {
            navigation.goBack();
            toggleModal();
          }, 1500);
        }
      } else {
        console.error('API Error:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: '#E7E8E3'}}>
      <Header navigation={() => navigation.goBack()} title={'แก้ไขสินค้า'} />
      <Modals
        second
        isVisible={isModalVisible}
        title={'แก้ไขสำเร็จ'}
        lottieView={
          <LottieView
            source={require('../../assets/animations/success.json')}
            style={{width: 150, height: 150, alignSelf: 'center'}}
            autoPlay
            loop
          />
        }
      />
      <KeyboardAwareScrollView>
        <View style={{marginTop: 30}} />
        <View style={{width: '85%', alignSelf: 'center', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txt4}>{'ชื่อสินค้า'}</Text>
            <Text style={[styles.txt4, {color: 'red'}]}>
              {''} {'*'}
            </Text>
          </View>
        </View>
        <View style={styles.viewContentTxtInput}>
          <TextInput
            value={product}
            onChangeText={text => setProduct(text)}
            style={styles.inputSeach}
            placeholderTextColor={'#677294'}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={{width: '85%', alignSelf: 'center', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txt4}>{'รหัสสินค้า'}</Text>
            <Text style={[styles.txt4, {color: 'red'}]}>
              {''} {'*'}
            </Text>
          </View>
        </View>
        <View style={styles.viewContentTxtInput}>
          <TextInput
            value={product_id}
            onChangeText={text => setProduct_id(text)}
            style={styles.inputSeach}
            placeholderTextColor={'#677294'}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={{width: '85%', alignSelf: 'center', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txt4}>{'ราคา'}</Text>
            <Text style={[styles.txt4, {color: 'red'}]}>
              {''} {'*'}
            </Text>
          </View>
        </View>
        <View style={styles.viewContentTxtInput}>
          <TextInput
            value={price}
            onChangeText={text => setPrice(text)}
            style={styles.inputSeach}
            placeholderTextColor={'#677294'}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={{width: '85%', alignSelf: 'center', marginTop: 20}}>
          <Text style={styles.txt4}>{'รายละเอียด'}</Text>
        </View>
        <View style={styles.viewContentTxtInput}>
          <TextInput
            value={description}
            onChangeText={text => setDescription(text)}
            style={styles.inputSeach}
            placeholderTextColor={'#677294'}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity
          disabled={
            product != '' && product_id != '' && price != '' ? false : true
          }
          style={[
            styles.btnSave,
            {
              opacity:
                product != '' && product_id != '' && price != '' ? 1 : 0.6,
            },
          ]}
          onPress={() => {
            product != '' && product_id != '' && price != ''
              ? [_editProducts(), route.params.getData()]
              : null;
          }}>
          <Text style={[styles.txt1, {color: '#fff'}]}>{'บันทึก'}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default EditProduct;
