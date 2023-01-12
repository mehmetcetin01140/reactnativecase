import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import RadioButtons from './RadioButtons';

const SortPopup = ({isVisible, setIsVisible, setSelectedCategory}) => {
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    setSelectedCategory(selectedItem);
  }, [selectedItem]);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 25,
              }}>
              <Text>Sırala</Text>

              <Pressable onPress={() => setIsVisible(!isVisible)}>
                <Image
                  style={styles.icons}
                  source={require('../Assets/close.png')}
                  resizeMode="cover"
                  resizeMethod="resize"
                />
              </Pressable>
            </View>

            <RadioButtons setSelectedItem={setSelectedItem} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    marginTop: '50%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default SortPopup;
