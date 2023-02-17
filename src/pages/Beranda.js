/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Image,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {productList} from '../redux/actions';

const Beranda = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const dispatch = useDispatch();
  const product = useSelector(store => store.productReducer.product);
  console.log({product});
  const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState(null);
  const baseUrl = 'https://dummyjson.com';
  useEffect(() => {
    const url = `${baseUrl}/products?limit=20`;
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          // console.log(response);
          // setData(response.data);
          dispatch(productList(response.data));
          setIsLoading(false);
          return;
        } else {
          throw new Error('Failed to fetch users');
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Data fetching cancelled');
        } else {
          // eslint-disable-next-line no-undef
          setErrorFlag(true);
          setIsLoading(false);
        }
      }
    };
    fetchUsers();
  }, [dispatch]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {isLoading && <Text style={styles.isLoading}>Loading..</Text>}
          {product &&
            product.products.map(item => (
              <View key={item.id} style={styles.item}>
                <Text>
                  {item.brand} - {item.category}
                </Text>
                <Image style={styles.img} source={{uri: item.thumbnail}} />
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  isLoading: {
    flex: 1,
    textAlign: 'center',
    marginVertical: 100,
  },
  item: {
    margin: 20,
  },
  img: {
    marginTop: 4,
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default Beranda;
