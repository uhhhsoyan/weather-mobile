import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const ForecastCard = ({ tomorrow, weather }) => {
    
    const renderDate = (date) => {
        var d = new Date(date);
        return `${DAYS_OF_WEEK[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}`
    }
    
    const renderWeatherIcon = () => {
        switch (weather.weather_state_abbr) {
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

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{tomorrow ? 'Tomorrow' : renderDate(weather.applicable_date)}</Text>
            {renderWeatherIcon()}
            <View>
                <Text style={styles.tempHi}>Hi: {Math.round(weather.max_temp)}&deg;C</Text>
                <Text style={styles.tempLo}>Lo: {Math.round(weather.min_temp)}&deg;C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    date: {
        fontFamily: 'Raleway_600SemiBold',
        color: '#e7e7eb',
        fontSize: 20,
    },
    weatherIcon: {
        height: 80,
        width: 80,
    },
    tempHi: {
        fontFamily: 'Raleway_600SemiBold',
        color: '#e7e7eb',
        fontSize: 20
    },
    tempLo: {
        fontFamily: 'Raleway_600SemiBold',
        color: '#a09fb1',
        fontSize: 20
    },
})

export default ForecastCard;