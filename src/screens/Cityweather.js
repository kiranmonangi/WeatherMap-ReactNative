import React,{useState} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import styles from '../styles/Citystyles';


const Cityweather =({navigation})=>{
    const [localtime, setlocaltime] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [humidity, setHumidity] = useState('');
    const [temperature, setTemperature] = useState('');
    const [icon, setIcon] = useState('');
    const CapitalName=navigation.getParam('capital', 'no-capital');
    console.log("CapitalName: "+CapitalName);
    const capitalWeather = async () => {                                        
      
        try {
          const response = await axios.get(
            `http://api.weatherstack.com/current?access_key=706e3263c01edd28fd6a5959daf70f09&query=${CapitalName}`,
          );
    
        //   alert( JSON.stringify(response.data));
       
           let result= response.data;
            console.log(result);
            
            setlocaltime(result.location.localtime);   
            console.log(localtime);
            setWindSpeed(result.current.wind_speed);   
            console.log(windSpeed);
            setHumidity(result.current.humidity);
            setTemperature(result.current.temperature);
            setIcon(result.current.weather_icons);
            console.log(icon + " icons");
        
      
        } catch (error) {
          // handle error
          alert(error.message);
        }
      };
        return(
         <View style={styles.citywcontainer}>
                 <View style={styles.citywheader}>
                      <Text style={styles.citywheaderText}> ~ {CapitalName} ~ </Text>
                  </View>
                  <Text style={styles.citywtextcitydetailsWeather}>
                 <Text>Localtime: {localtime}</Text><br></br>
                 <Text>Wind speed: {windSpeed}</Text><br></br>
                 <Text>Humidity: {humidity}</Text><br></br>
               
                 
                 </Text>
                 <View>
                <Text style={styles.citydtextcitydetails}> Temperature: {temperature} </Text>
                <Image
                  style={styles.weather_icon} 
                  source={{
                    uri: `${icon}`
                  }}
                 />
                </View>
                 <TouchableOpacity style={styles.citydgetdetails} onPress={capitalWeather}>
                <Text style={styles.citydgetdetailsText}>Get details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.citydweather} onPress={()=> navigation.navigate('Home')}>
                    <Text style={styles.citydweatherReporttext}> Visit Again </Text>
            </TouchableOpacity>
      </View>
        );
    };
export default Cityweather;



