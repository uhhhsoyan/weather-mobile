import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions } from 'react-native';
import WeatherToday from './src/screens/WeatherToday';
import Forecast from './src/screens/Forecast';
//import Highlights from './src/screens/Highlights';
import metaweather from './src/api/metaweather';
import axios from 'axios';
import { AppLoading } from 'expo';
import { useFonts, 
    Raleway_100Thin,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
 } from '@expo-google-fonts/raleway';
import Highlights from './src/screens/Highlights';

const SAMPLE_SF = {"consolidated_weather":[{"id":5661336785649664,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"W","created":"2020-10-20T18:20:17.101519Z","applicable_date":"2020-10-20","min_temp":12.665,"max_temp":21.595,"the_temp":21.28,"wind_speed":2.8218486353667913,"wind_direction":274.14545730160114,"air_pressure":1012.5,"humidity":63,"visibility":14.79546945836316,"predictability":68},{"id":5378094362787840,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"W","created":"2020-10-20T18:20:20.164704Z","applicable_date":"2020-10-21","min_temp":14.07,"max_temp":20.53,"the_temp":21.825000000000003,"wind_speed":3.767120412015165,"wind_direction":281.1051880468066,"air_pressure":1009.5,"humidity":59,"visibility":16.143223574325937,"predictability":68},{"id":6575634726780928,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"N","created":"2020-10-20T18:20:22.985180Z","applicable_date":"2020-10-22","min_temp":13.805,"max_temp":22.03,"the_temp":21.58,"wind_speed":3.4412180160820807,"wind_direction":350.44968470835846,"air_pressure":1010.0,"humidity":43,"visibility":15.932889425753599,"predictability":68},{"id":4842486305390592,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"WSW","created":"2020-10-20T18:20:26.055341Z","applicable_date":"2020-10-23","min_temp":13.64,"max_temp":18.565,"the_temp":18.17,"wind_speed":4.281781933025797,"wind_direction":255.93437834481736,"air_pressure":1013.5,"humidity":60,"visibility":14.010366956971287,"predictability":68},{"id":4714779613593600,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"WSW","created":"2020-10-20T18:20:29.147558Z","applicable_date":"2020-10-24","min_temp":12.629999999999999,"max_temp":16.395,"the_temp":16.92,"wind_speed":7.295825642853733,"wind_direction":239.58787776156964,"air_pressure":1014.5,"humidity":73,"visibility":14.67865167422254,"predictability":70},{"id":4837260940804096,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"NNE","created":"2020-10-20T18:20:31.985145Z","applicable_date":"2020-10-25","min_temp":12.165,"max_temp":17.07,"the_temp":15.85,"wind_speed":4.569419390757973,"wind_direction":18.999999999999996,"air_pressure":1014.0,"humidity":65,"visibility":9.999726596675416,"predictability":70}],"time":"2020-10-20T12:34:39.448912-07:00","sun_rise":"2020-10-20T07:23:31.464018-07:00","sun_set":"2020-10-20T18:25:55.368947-07:00","timezone_name":"LMT","parent":{"title":"California","location_type":"Region / State / Province","woeid":2347563,"latt_long":"37.271881,-119.270233"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":360},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360}],"title":"San Francisco","location_type":"City","woeid":2487956,"latt_long":"37.777119, -122.41964","timezone":"US/Pacific"}
const windowWidth = Dimensions.get('window').width;

const App = () => {
    const [weatherData, setWeatherData] = useState(null); // change back to null
    const [woeid, setWoeid] = useState('44418'); // Where On Earth ID - default San Francisco
    let [fontsLoaded] = useFonts({
        Raleway_100Thin,
        Raleway_400Regular,
        Raleway_500Medium,
        Raleway_600SemiBold,
        Raleway_700Bold,
    });

    useEffect(() => {
        const search = async () => {
            try {
                const { data } = await axios.get(`https://www.metaweather.com/api/location/${woeid}/`)
                setWeatherData(data);
            } catch (err) {
                console.log('There was an error')
                console.log(err)
            }
        }
        search()
    }, [woeid]);

    const updateLocation = (searchResult) => {
        setWoeid(searchResult.woeid);
    };

    if (!fontsLoaded || !weatherData) {
        return <AppLoading />;
    } else {
        return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <ScrollView 
                style={styles.scrollView}
                snapToAlignment='start'
                snapToInterval={Dimensions.get('window').height}
                decelerationRate="fast"
            >
                <View style={styles.scrollContent}>

                </View>
                <WeatherToday 
                    location={weatherData.title}
                    updateLocation={updateLocation}
                    weatherToday={weatherData.consolidated_weather[0]}

                />
                <Forecast 
                    weatherData={weatherData.consolidated_weather}
                />
                <Highlights 
                    weatherToday={weatherData.consolidated_weather[0]}
                />
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        backgroundColor: '#1e213a',
        alignSelf: 'center',
        width: windowWidth
    },
    scrollContent: {
        flex: 1,
    }
});

export default App;
