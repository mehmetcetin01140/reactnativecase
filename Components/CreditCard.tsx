import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function CreditCard() {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.creditCardContainer}>
        <View style={styles.leftSide}>
          <Text style={{fontSize: 12, marginBottom: 4}}>
            Online Kredi/Banka Kartı
          </Text>
          <Text style={{fontSize: 10}}>
            1 Sipariş Kargoda-1 Sipariş Teslim Edildi
          </Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={{fontSize: 9}}>Sipariş No: 234234</Text>
        </View>
      </View>
      <View style={styles.cardInfo}>
        <Image
          style={{width: 35, height: 35}}
          source={require('../Assets/visa.png')}
          resizeMode="cover"
          resizeMethod="resize"
        />
        <Text style={{fontSize: 12, marginLeft: 10}}>
          5269 11** **** 8042 (Kredi Kartı ile)
        </Text>
      </View>
      <View style={{flexDirection: 'row', padding: 10}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 12}}>Kargo</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'right', fontSize: 12}}>12,98</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', padding: 10}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 12}}>Ürünler</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'right', fontSize: 12}}>1.332,98</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', padding: 10}}>
        <View style={{flex: 2}}>
          <Text style={{fontSize: 12, color: '#660099'}}>Kampanya</Text>
          <Text style={{fontSize: 9, color: '#660099'}}>
            Seçili giyim ve ayakkabı ürünlerinizde 200 TL üzeri alışverişlerde
            20 TL kazanın.
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'right', fontSize: 12, color: '#660099'}}>
            132,98
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottom: 1,
          borderWidth: 1,
          borderColor: '#F4F6FB',
          marginTop: 10,
        }}></View>
      <View style={{padding: 8}}>
        <Text style={{fontSize: 12, marginVertical: 10}}>Sipariş Notu:</Text>
        <Text style={{fontSize: 10, color: '#B0B0B0'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <View
          style={{
            borderBottom: 1,
            borderWidth: 1,
            borderColor: '#F4F6FB',
            marginVertical: 15,
          }}></View>
        <View
          style={{
            padding: 10,
            backgroundColor: '#D4FCD7',
            flexDirection: 'row',
            borderRadius: 5,
          }}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../Assets/success.png')}
            resizeMode="cover"
            resizeMethod="resize"
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 12, marginBottom: 1}}>
              Miraç Yıldırım adlı kişiye teslim edildi.
            </Text>
            <Text style={{fontSize: 11, color: '#13C122'}}>
              Teslim Tarihi 16 Ara Per; 18:09
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  creditCardContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,
    backgroundColor: 'white',
  },
  leftSide: {
    flex: 2,
    paddingHorizontal: 10,
  },
  rightSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    padding: 2,
    borderRadius: 10,
    backgroundColor: '#F6E7D6',
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F4F6FB',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 45,
    marginBottom: 10,
  },
});
