import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgClose, SvgEdit, SvgSearch} from '../../assets/svg';
import styles from './styles';
import {TextInput} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Modals from 'components/Modals';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';

const AllProducts = ({navigation}) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const [_id, set_id] = useState();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    _getproducts();
  }, []);

  useEffect(() => {
    const filtered = data.filter(item =>
      item.product_name.toLowerCase().includes(search.toLowerCase()),
    );
    if (search === '') {
      return setFilteredData(data);
    }

    setFilteredData(filtered);
  }, [search, data]);

  async function _getproducts() {
    try {
      const url = 'http://localhost:3000/products';
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        if (data.status == '01') {
          setData(data.response_data);
         
        }
      } else {
        console.error('API Error:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  async function _deleteproducts() {
    try {
      const url = 'http://localhost:3000/products/delete';
      const requestBody = {
        id: _id,
      };
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      if (response.ok) {
        if (data.status == '01') {
          console.log('delete success');
          _getproducts();
          toggleModal();
        }
      } else {
        console.error('API Error:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const renderItem = ({item}) => {
    return (
      <View style={styles.viewCard}>
        <View style={styles.viewRow1}>
          <View style={styles.viewRow2}>
            {/* <View style={[styles.viewImg, {alignItems: 'center'}]}>
              <Image
                // resizeMode="cover"
                source={{uri: item.thumbnail}}
                style={{width: 92, height: 100}}
              />
              <Text style={[styles.txt1, {color: '#fff'}]}>
                {item.product_name}
              </Text>
            </View> */}
            <View style={{left: 15}}>
              <Text style={[styles.txt1]}>
                {'ชื่อสินค้า :'} {item.product_name}
              </Text>
              <Text style={[styles.txt3]}>
                {'รหัส :'} {item.product_id}
              </Text>
              <Text style={[styles.txt3]}>
                {'ราคา :'} {item.price}
              </Text>
              <View style={styles.viewRow2}>
                <View style={styles.viewRow3}>
                  <View style={styles.viewIn} />
                  <Text style={[styles.txt3, {marginLeft: 5}]}>
                    {item.total_in}
                  </Text>
                </View>
                <View style={[styles.viewRow3, {marginLeft: 18}]}>
                  <View style={[styles.viewIn, {backgroundColor: '#FF0000'}]} />
                  <Text style={[styles.txt3, {marginLeft: 5}]}>
                    {item.total_out}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('EditProduct', {
                  data: item,
                  getData: _getproducts,
                })
              }
              hitSlop={{right: 50, left: 50}}>
              <SvgEdit />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => [toggleModal(), set_id(item.id)]}
              hitSlop={{right: 50, left: 50}}>
              <MaterialCommunityIcons
                name="delete-sweep-outline"
                color={'#000'}
                size={26}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderEmpty = () => {
    return (
      <View
        style={{
          marginTop: 140,
        }}>
        <Text style={[styles.txt1]}>{'ไม่พบรายการสินค้า'}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#E7E8E3'}}>
      <KeyboardAwareScrollView>
        <Modals
          frist
          isVisible={isModalVisible}
          title={'ลบรายการที่เลือก'}
          btnTwo
          onPressCancle={() => toggleModal()}
          onPressOk={() => _deleteproducts()}
          textCancle={'ยกเลิก'}
          textOk={'ตกลง'}
          bgBtnCancle={'#D0D4CA'}
          bgBtnOk={'red'}
          lottieView={
            <LottieView
              source={require('../../assets/animations/delete.json')}
              style={styles.iconBin}
              autoPlay
              loop
            />
          }
        />
        <View style={{marginTop: 80}} />
        <View style={[styles.viewRow1, {paddingHorizontal: 30}]}>
          <Text style={[styles.txt1]}>{'สินค้าทั้งหมด'}</Text>
          <Pressable
            onPress={() =>
              navigation.navigate('AddProducts', {
                getData: _getproducts,
                data: data,
              })
            }
            style={({pressed}) => [
              styles.viewAdd,
              {opacity: pressed ? 0.6 : 1, padding: 5},
            ]}>
            <Text style={[styles.txt1, {color: '#fff'}]}>
              {'+  เพิ่มสินค้า'}
            </Text>
          </Pressable>
        </View>
        <View style={[styles.viewContentTxtInput, {marginTop: 20}]}>
          <SvgSearch />
          <TextInput
            value={search}
            onChangeText={text => setSearch(text)}
            style={styles.inputSeach}
            placeholder="ค้นหา..."
            placeholderTextColor={'#677294'}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity onPress={() => setSearch('')}>
            <SvgClose />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 25}}
            ListEmptyComponent={renderEmpty}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AllProducts;
