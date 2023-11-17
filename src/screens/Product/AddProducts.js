import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {TextInput} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Modals from 'components/Modals';
import LottieView from 'lottie-react-native';
const AddProducts = ({navigation, route}) => {
  const [product, setProduct] = useState('');
  const [product_id, setProduct_id] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  let lastElement = route?.params?.data[route?.params?.data.length - 1];
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    route?.params?.getData();
  }, []);

  async function _createProducts() {
    try {
      const url = 'http://localhost:3000/products/create';
      const requestBody = {
        id: lastElement?.id + 1,
        product_id: product_id,
        product_name: product,
        description: description,
        price: price,
        total_in: quantity,
        thumbnail: image,
        total_out: 0,
      };
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (response.ok) {
        if (data.status == '01') {
          console.log('product', data.response_data);

          route?.params?.getData();
          toggleModal();
          setTimeout(() => {
            navigation.goBack();
            toggleModal();
          }, 3000);
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
      <Header
        navigation={() => navigation.goBack()}
        title={'เพิ่มสินค้าใหม่'}
      />
      <Modals
        second
        isVisible={isModalVisible}
        title={'เพิ่มรายการสินค้าสำเร็จ'}
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
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txt4}>{'จำนวน'}</Text>
            <Text style={[styles.txt4, {color: 'red'}]}>
              {''} {'*'}
            </Text>
          </View>
        </View>
        <View style={styles.viewContentTxtInput}>
          <TextInput
            value={quantity}
            onChangeText={text => setQuantity(text)}
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
            product != '' && product_id != '' && price != '' && quantity != ''
              ? false
              : true
          }
          style={[
            styles.btnSave,
            {
              opacity:
                product != '' &&
                product_id != '' &&
                price != '' &&
                quantity != ''
                  ? 1
                  : 0.6,
            },
          ]}
          onPress={() => {
            product != '' && product_id != '' && price != '' && quantity != ''
              ? [_createProducts(), route.params.getData()]
              : null;
          }}>
          <Text style={[styles.txt1, {color: '#fff'}]}>{'บันทึก'}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddProducts;
