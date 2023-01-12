import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import FilterAndSortButtons from './FilterAndSortButtons';
import {Products} from '../Products/Products';
import ProductCards from './ProductCards';
export default function Orders({searchParam, filterParam}) {
  const [selected, setSelected] = useState('');

  const filteredData = Products.filter(filt =>
    filt.date.toLowerCase().includes(searchParam.toLowerCase()),
  );

  const sortParams = () => {
    switch (selected.value) {
      case '3':
        return filteredData.sort(function (a, b) {
          return a.price - b.price;
        });
      case '4':
        return filteredData.sort(function (a, b) {
          return b.price - a.price;
        });
      default:
        return filteredData;
    }
  };
  const filteredWithCategory = () => {
    switch (filterParam) {
      case 'Tümü':
        return sortParams();
      case 'İptallerim':
        return sortParams().filter(product => product.isCompleted == false);
      case 'İadelerim':
        return sortParams().filter(product => product.isReturned == true);
      default:
        return sortParams();
    }
  };

  console.log(filteredWithCategory());
  const renderProducts = () => {
    return filteredWithCategory().map((product, i) => (
      <View key={i}>
        <ProductCards product={product} />
      </View>
    ));
  };

  return (
    <>
      <View style={styles.ordersContainer}>
        <Text style={styles.title}>Siparişlerim</Text>
        <Text style={styles.quantity}>Toplam 3 adet</Text>
      </View>
      <FilterAndSortButtons setSelected={setSelected} />
      {renderProducts()}
    </>
  );
}

const styles = StyleSheet.create({
  ordersContainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  title: {
    flex: 1,
    color: '#191D25',
    fontSize: 13,
  },
  quantity: {
    flex: 1,
    textAlign: 'right',
    fontSize: 10,
    color: '#606060',
  },
});
