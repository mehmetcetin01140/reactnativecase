import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import React from 'react';

export default function Search({searchParam, setSearchParam}) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchItems}>
        <TextInput
          style={styles.searchInput}
          value={searchParam}
          onChangeText={setSearchParam}
          placeholder="Siparişlerinde Ara..."></TextInput>

        <Image
          style={styles.voiceIcon}
          source={require('../Assets/mic.png')}
          resizeMode="cover"
          resizeMethod="resize"
        />
        <View style={styles.searchIcon}>
          <Image
            source={require('../Assets/searchicon.png')}
            resizeMode="cover"
            resizeMethod="resize"
          />
        </View>
      </View>
      <View style={styles.searchFilter}>
        <Image
          style={styles.headerRightIcon}
          source={require('../Assets/filter.png')}
          resizeMode="cover"
          resizeMethod="resize"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 40,
    width: '100%',
    height: 50,

    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchItems: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

    height: '100%',
  },
  searchFilter: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginLeft: 15,
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: '15%',
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    fontSize: 12,
    height: 50,
  },
  searchIcon: {
    width: 45,
    height: 36,
    right: 5,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6FB',
    borderRadius: 5,
  },
  voiceIcon: {
    position: 'absolute',
    left: 10,
  },
});
