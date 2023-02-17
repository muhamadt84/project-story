import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../redux/actions';

const Profil = () => {
  const dispatch = useDispatch();
  const count = useSelector(store => store.countReducer.count);
  const product = useSelector(store => store.productReducer.product);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.imageThumbnail}
          source={{uri: item.thumbnail}}
          resizeMode={'cover'}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.container}>
            <Text style={styles.title_text}>Counter App</Text>
            <Text style={styles.counter_text}>{count}</Text>
            <TouchableOpacity onPress={handleIncrement} style={styles.btn}>
              <Text style={styles.btn_text}> Increment </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleDecrement}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{...styles.btn, backgroundColor: '#6e3b3b'}}>
              <Text style={styles.btn_text}> Decrement </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <FlatList
        padding={10}
        data={product.products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
    height: 600,
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 10,
    margin: 4,
  },
});

export default Profil;
