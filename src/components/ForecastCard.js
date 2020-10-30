import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { renderDate, renderWeatherIcon } from '../helpers';

const ForecastCard = ({ tomorrow, weather }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{tomorrow ? 'Tomorrow' : renderDate(weather.applicable_date)}</Text>
            {renderWeatherIcon(weather.weather_state_abbr, { height: 70, width: 70 })}
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