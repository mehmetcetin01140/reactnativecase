import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React,{useState,useEffect} from 'react';

export default function Header({setFilterParam}) {
  const Tabs = ["Tümü","İptallerim","İadelerim"]
  const [selectedTab,setSelectedTab] = useState("Tümü")
  useEffect(()=>{
    setFilterParam(selectedTab)
  },[selectedTab])
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTop}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.headerLeftIcon}
            source={require('../Assets/user.png')}
            resizeMode="cover"
            resizeMethod="resize"
          />
        </View>
        <Text style={styles.headerCenter}>Mayzor Test Case</Text>
        <View style={styles.headerRight}>
          <Image
            style={styles.headerRightIcon}
            source={require('../Assets/cart.png')}
            resizeMode="cover"
            resizeMethod="resize"
          />
          <Text style={{color: 'white'}}>(0)</Text>
        </View>
      </View>
      <View style={styles.headerBottomContainer}>
        <View style={styles.flexContainer}>
         {
          Tabs.map((tab,i)=>(
            <Pressable onPress={()=>setSelectedTab(tab)} key={i} style={tab == selectedTab ? styles.selectedButtons : styles.navigationButtons} >
            <Text style={tab == selectedTab ? styles.selectedColors : styles.unselectedColors}>{tab}</Text>
          </Pressable>
          ))
         }
      
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 144,
    backgroundColor: '#660099',
    position: 'relative',
  },
  headerTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  headerLeft: {
    width: 66,
    height: 40,
    backgroundColor: '#5B0486',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  headerLeftIcon: {
    width: 18,
    height: 18,
  },
  headerCenter: {
    width: 100,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 66,
    height: 40,
    backgroundColor: '#FF9600',
  },
  headerRightIcon: {
    width: 20,
    height: 18,
    marginHorizontal: 3,
  },
  headerBottomContainer: {
    position: 'absolute',
    bottom: -30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  flexContainer: {
    backgroundColor: 'white',
    width: '80%',
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10,
  },
  navigationButtons: {
    height: 40,
    backgroundColor: '#F4F6FB',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    // #FF9600
  },
  selectedButtons: {
    height: 40,
    backgroundColor: '#FF9600',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,

  },
  selectedColors:{
    color:"white"
  }
});
