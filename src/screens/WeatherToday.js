import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import SearchModal from '../components/SearchModal';

const windowHeight = Dimensions.get('window').height;
const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const WeatherToday = ({ location, updateLocation, weatherToday, windowHeight }) => {
    const [showSearch, setShowSearch] = useState(false);

    const launchSearch = () => {
        setShowSearch(true)
    }

    const launchGeoLocate = () => {
        console.log('Launch geolocation was clicked')
    }

    const renderWeatherIcon = () => {
        switch (weatherToday.weather_state_abbr) {
            case 'sn':
                return <Image style={styles.weatherIcon} source={require('../assets/icons/Snow.png')} />
            case 'sl':
                return <Image style={styles.weatherIcon} source={require('../assets/icons/Sleet.png')} />
            case 'h':
                return <Image style={styles.weatherIcon} source={require('../assets/icons/Hail.png')} />
            case 't':
                return <Image style={styles.weatherIcon} source={require('../assets/icons/Thunderstorm.png')} />
            case 'hr':
                return <Image style={styles.weatherIcon} source={require('../assets/icons/HeavyRain.png')} />
            case 'lr':
                return <Image style={styles.weatherIcon} source={require('../assets/icons/LightRain.png')} /> 
            case 's':
                return <Image style={styles.weatherIcon} source={require('../assets/icons/Shower.png')} />
            case 'hc':
                return <Image style={styles.weatherIcon} source={require('../assets/icons/HeavyCloud.png')} />
            case 'lc':
                return <Image style={styles.weatherIcon} source={require('../assets/icons/LightCloud.png')} />    
            default:
                return <Image style={styles.weatherIcon} source={require('../assets/icons/Clear.png')} />
        }
    };

    const renderDate = () => {
        var d = new Date();
        return `Today  -  ${DAYS_OF_WEEK[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}`
    }
    
    return (
        <View style={styles.container}>
            <SearchModal
                showSearch={showSearch}
                setShowSearch={setShowSearch}
                updateLocation={updateLocation}
            />
            <View style={styles.searchRow}>
                <Pressable onPress={launchSearch} style={styles.searchBtn}>
                    <Text style={styles.searchBtnText}>Search</Text>
                    <FontAwesome name="search" size={24} color="white" />
                </Pressable>
                <Pressable onPress={launchGeoLocate} style={styles.geoLocateBtn}>
                    <MaterialIcons name="gps-fixed" size={24} color="white" />
                </Pressable>
            </View>
            {renderWeatherIcon()}
            <Text style={styles.textTemp}>
                <Text style={styles.textTempNum}>{Math.round(weatherToday.the_temp)}</Text>
                <Text style={styles.textTempDeg}>&deg;C</Text>
            </Text>
            <Text style={styles.textState}>
                {weatherToday.weather_state_name}
            </Text>
            <Text style={styles.textDate}>
                {renderDate()}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text><MaterialIcons name="location-on" size={32} color="#88869D" /></Text>
                <Text style={styles.textLocation}>{location}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        backgroundColor: '#1e213a',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        paddingTop: 60,
        paddingBottom: 60,
    },
    searchRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBtn: {
        height: 40,
        width: 110,
        flexDirection: 'row',
        borderRadius: 40,
        backgroundColor: '#6e707a',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    searchBtnText: { 
        color: '#e7e7eb', 
        fontSize: 18, 
        fontFamily: 'Raleway_700Bold' 
    },
    geoLocateBtn: {
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: '#6e707a',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    weatherIcon: {
        height: 175,
        width: 175,
    },
    textTemp: {
        fontFamily: 'Raleway_400Regular',
    },
    textTempNum: {
        color: '#e7e7eb',
        fontSize: 150,
    },
    textTempDeg: {
        color: '#a09fb1',
        fontSize: 70,
    },
    textState: {
        fontFamily: 'Raleway_600SemiBold',
        color: '#a09fb1',
        fontSize: 50,
        marginBottom: 30,
    },
    textDate: {
        fontFamily: 'Raleway_400Regular',
        color: '#a09fb1',
        fontSize: 22,
    },
    textLocation: {
        fontFamily: 'Raleway_400Regular',
        color: '#a09fb1',
        fontSize: 22,
    },

});

export default WeatherToday;