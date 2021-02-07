import React,{useState} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import styles from '../styles/Citystyles';

 const Citydetails= ({navigation}) =>{
    
    const [capital, setCapital] = useState('');
    const [population, setPopulation] = useState('');
    const [latlng, setlatlng] = useState('');
    const [callingCodes,setCallingCodes] = useState('');
    const [pic, setPic] = useState('');
    
    const CountryName=navigation.getParam('country', 'no-country');
    console.log("CountryName:   "+CountryName);

        const countrydata = async () => {
        try {
          const response = await axios.get(
            `https://restcountries.eu/rest/v2/name/${CountryName}`,
          );
    
            // alert( JSON.stringify(response.data));
       
           let res= response.data;
            setCapital(res[0].capital);   
            console.log(capital);
            setPopulation(res[0].population);
            
            setlatlng(res[0].latlng);
            setCallingCodes(res[0].callingCodes);
            setPic(res[0].flag);
            console.log(pic + " flag");
        
      
        } catch (error) {
          
          alert("you have entered a invalid country..Go back and enter a valid country");
        }
      };
        
        return(
         <View style={styles.citydcontainer}>
                     
                 <View style={styles.citydheader}>
                      <Text style={styles.citydheaderText}> ~{CountryName}~ </Text>
                  </View>
                <Text style={styles.citydtextcitydetails}>
                
                 <Text>Population: {population}</Text><br></br>
                 <Text>Capital: {capital}</Text><br></br>
                 <Text>Latlng: {latlng}</Text><br></br>
                 <Text>callingCodes: {callingCodes}</Text><br></br>
                 
              </Text>
              <View>
                <Text style={styles.citydtextcitydetails}>Flag: </Text>
                <Image
                  style={styles.flagPic} 
                  source={{
                    uri: `${pic}`
                  }}
                 />
                </View>
              <TouchableOpacity style={styles.citydweather} onPress={()=> navigation.navigate('Cityweatherr',{capital})}>
                    <Text style={styles.citydweatherReporttext}> Capital Weather </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.citydgetdetails} onPress={countrydata}>
                <Text style={styles.citydgetdetailsText}>Get details</Text>
            </TouchableOpacity>
      
      </View>
        );
    };



export default Citydetails;