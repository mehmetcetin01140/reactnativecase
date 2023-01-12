import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Types/NavigationTypes';
type NavProp = NativeStackNavigationProp<RootStackParamList, 'Dummy'>;

export default function OrderInfoButtons() {
  const navigation = useNavigation<NavProp>();
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Değerlendir',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Fatura Göster',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Kargo Takip',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
      title: 'Sorun Bildir',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
      title: 'İade Talebi',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d726',
      title: 'Oy Kullan',
    },
  ];

  const Item = ({title}) => (
    <Pressable
      onPress={() => navigation.navigate('Dummy', {name: title})}
      style={styles.buttons}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );

  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View style={styles.infoButtonsContainer}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => '_' + item.id}
        numColumns={3}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  infoButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 'auto',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 12,
  },
  buttons: {
    flex: 1,
    margin: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F6FB',
    borderRadius: 5,
  },
});
