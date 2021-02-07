import React,{useState} from 'react';   
import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/Citystyles';

const City =(props)=> {
    
    const [country, setCountry] = useState('');
        
        return(
            
         <View style={styles.citycontainer}>
                 <View style={styles.cityheader}>
                     <Text style={styles.cityheaderText}> ~ Country Details ~ </Text>
                 </View>
          <TextInput 
                    style={styles.citytextInput}
                    onChangeText={(country) => setCountry(country)}
                    value={country}
                    placeholder='Enter country...'
                    placeholderTextColor='white'
                    underlineColorAndroid= 'transparent'>
             </TextInput>
             <TouchableOpacity style={styles.citysubmit}  onPress={()=> props.navigation.navigate('Citydetailss',{country})} >
                    <Text style={styles.citysubmitButtonText}> Submit </Text>
            </TouchableOpacity>
       </View>
      
        );
    };
   

export default City;

