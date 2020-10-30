import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import ForecastCard from '../components/ForecastCard';

const windowHeight = Dimensions.get('window').height;

const Forecast = ({ weatherData }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Forecast</Text>
            <View style={styles.cardContainer}>
                <ForecastCard tomorrow weather={weatherData[1]} />
                <ForecastCard tomorrow={false} weather={weatherData[2]} />
                <ForecastCard tomorrow={false} weather={weatherData[3]} />
                <ForecastCard tomorrow={false} weather={weatherData[4]} />
                <ForecastCard tomorrow={false} weather={weatherData[5]} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#100e1d',
        height: windowHeight,
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
    },
    header: {
        color: '#e7e7eb',
        fontSize: 40,
        fontFamily: 'Raleway_600SemiBold',
        marginTop: 60
    },
    cardContainer: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 70,
        alignItems: 'center',
        justifyContent: 'space-between'
    }

})

export default Forecast;