import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CreditCard from './CreditCard';
import OrderInfoButtons from './OrderInfoButtons';
export default function ProductCards({product}) {
  const [isVisible, setIsVisible] = useState(false);

  const cardIcon = isVisible
    ? require(`../Assets/dropdown.png`)
    : require(`../Assets/cardicon.png`);
  return (
    <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <Image
            style={styles.cardImage}
            source={product.image}
            resizeMode="cover"
            resizeMethod="resize"
          />
          <Image
            style={styles.overlappingImageFirst}
            source={product.imageSecond}
            resizeMode="cover"
            resizeMethod="resize"
          />
          <Image
            style={styles.overlappingImageSecond}
            source={product.imageSecond}
            resizeMode="cover"
            resizeMethod="resize"
          />
          <Image
            style={styles.overlappingImageThird}
            source={product.imageThird}
            resizeMode="cover"
            resizeMethod="resize"
          />
          {product.imageThird && (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#F4F6FB',
                position: 'absolute',
                left: 15,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Text style={{color: '#666666', fontSize: 12}}>+3</Text>
            </View>
          )}
        </View>
        <View style={styles.cardLayout}>
          <Text style={{fontSize: 12}}>{product.date}</Text>
          <Text style={{fontSize: 10, color: '#666666'}}>Toplam 2 sipariş</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={{fontSize: 12}}>{product.price} TL</Text>
          <Image
            style={{marginLeft: 15}}
            source={cardIcon}
            resizeMode="cover"
            resizeMethod="resize"
          />
        </View>
      </View>
      {isVisible && (
        <>
          <CreditCard />
          <OrderInfoButtons />
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 70,
    paddingHorizontal: 15,
  },
  cardLayout: {
    flex: 1.25,
    marginLeft: 15,
  },
  priceContainer: {
    flex: 1.25,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F4F6FB',
    alignItems: 'center',
    height: 35,
    borderRadius: 5,
    marginLeft: 10,
    paddingHorizontal: 2,
  },
  cardImageContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cardImage: {
    position: 'absolute',
    marginHorizontal: 10,
  },
  overlappingImageFirst: {
    position: 'absolute',
    left: 8,
  },
  overlappingImageSecond: {
    position: 'absolute',
    left: 8,
  },
  overlappingImageThird: {
    position: 'absolute',
    left: 16,
  },
});
