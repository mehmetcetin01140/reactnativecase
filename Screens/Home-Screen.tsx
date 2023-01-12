import React,{useState} from 'react'
import {
  ScrollView,
  View,
} from 'react-native';
import Header from '../Components/Header';
import Orders from '../Components/Orders';
import Search from '../Components/Search';

export default function HomeScreen() {
  const [searchParam,setSearchParam] = useState("")
  const [filterParam,setFilterParam] = useState("")
  return (
 <ScrollView >
<Header setFilterParam={setFilterParam}/>
<View style={{paddingHorizontal:40}}>
<Search searchParam={searchParam} setSearchParam={setSearchParam}/>
<Orders searchParam={searchParam} filterParam={filterParam}/>
</View>
 </ScrollView>
  )
}


