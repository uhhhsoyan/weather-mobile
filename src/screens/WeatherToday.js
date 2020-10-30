import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import SearchModal from '../components/SearchModal';
import { renderDate, renderWeatherIcon } from '../helpers';

const windowHeight = Dimensions.get('window').height;

const WeatherToday = ({ location, updateLocation, weatherToday }) => {
    const [showSearch, setShowSearch] = useState(false);

    const launchSearch = () => {
        setShowSearch(true)
    }

    const launchGeoLocate = () => {
        console.log('Launch geolocation was clicked')
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
            {renderWeatherIcon(weatherToday.weather_state_abbr)}
            <Text style={styles.textTemp}>
                <Text style={styles.textTempNum}>{Math.round(weatherToday.the_temp)}</Text>
                <Text style={styles.textTempDeg}>&deg;C</Text>
            </Text>
            <Text style={styles.textState}>
                {weatherToday.weather_state_name}
            </Text>
            <Text style={styles.textDate}>
                {`Today - ${renderDate()}`}
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