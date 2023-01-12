import React, { useState,useEffect } from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

export default function RadioButtons({setSelectedItem}) {
   const [selected,setSelected] = useState("")
   useEffect(()=>{
    setSelectedItem(selected)
   },[selected])
    const styles = {
        containerStyle:{width:"100%",borderTopWidth:1,borderBottomWidth:1,paddingVertical:10,borderColor:"#F4F6FB",},
        labelStyle:{fontSize:12},
        borderColor:"#B0B0B0",color:"#B0B0B0"
    }
    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
        {
            id: '1',
            label: 'Varsayılan',
            value: '1',
            selected:true,
      ...styles
        },
        {
            id: '2',
            label: 'En Çok Satanlar',
            value: '2',
            ...styles
        },
        {
            id: '3',
            label: 'Artan Fiyat',
            value: '3',
            ...styles
        },
        {
            id: '4',
            label: 'Azalan Fiyat',
            value: '4',
            ...styles
        },
        {
            id: '5',
            label: 'En Yeniler',
            value: '5',
            ...styles
        },
        {
            id: '6',
            label: 'Alfabetik Sıra',
            value: '6',
            ...styles
        }
    ]);

    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
       setSelected(radioButtonsArray.find(radio=>radio.selected===true))
    }

    return <RadioGroup 
    radioButtons={radioButtons} 
    onPress={onPressRadioButton} 
    containerStyle={{alignItems:"flex-start", marginVertical:15}}
/>
   

   
    

}