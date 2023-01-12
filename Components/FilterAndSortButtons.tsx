import {View, Text, StyleSheet, Image,Pressable} from 'react-native';
import React,{useState,useEffect} from 'react';
import SortPopup from './SortPopup';

export default function FilterAndSortButtons({setSelected}) {
    const [filterPopup, setFilterPopup] = useState<boolean>(false)
    const [selectedCategory,setSelectedCategory] = useState("")
    useEffect(()=>{
      setSelected(selectedCategory)
    },[selectedCategory])

  return (
    <View style={styles.buttonsContainer}>
        <Pressable style={styles.filter} onPress={()=>setFilterPopup(!filterPopup)}>
        <Image
          style={styles.icons}
          source={require('../Assets/filter.png')}
          resizeMode="cover"
          resizeMethod="resize"
        />
        <Text style={{marginHorizontal:5,fontSize:12,color:"#AAACAF"}}>Filtrele</Text>
        <SortPopup isVisible={filterPopup} setIsVisible={setFilterPopup} setSelectedCategory={setSelectedCategory}/>
        </Pressable>
        <Pressable style={styles.sort} onPress={()=>setFilterPopup(!filterPopup)}>


        <Image
          style={styles.icons}
          source={require('../Assets/sort.png')}
          resizeMode="cover"
          resizeMethod="resize"
        />
        <Text style={{marginHorizontal:5,fontSize:12,color:"#AAACAF"}}>Sırala</Text>

        </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  filter: {
    backgroundColor: 'white',
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius:5
  },
  sort: {
    backgroundColor: 'white',
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius:5
  },
  icons:{
    width:13,
    height:14
  }
});
