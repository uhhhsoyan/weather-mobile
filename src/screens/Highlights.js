import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import WindCard from '../components/WindCard';
import AirPressureCard from '../components/AirPressureCard';
import HumidityCard from '../components/HumidityCard';
import VisibilityCard from '../components/VisibilityCard';

const windowHeight = Dimensions.get('window').height;

const Highlights = ({ weatherToday }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Highlights</Text>
            <View style={styles.cardContainer}>
                <WindCard 
                    speed={weatherToday.wind_speed}
                    direction={weatherToday.wind_direction}
                    directionCompass={weatherToday.wind_direction_compass}
                />
                <HumidityCard humidity={weatherToday.humidity} />
                <VisibilityCard visibility={weatherToday.visibility} />
                <AirPressureCard airPressure={weatherToday.air_pressure} />
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
    cardContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 60
    },  
    header: {
        color: '#e7e7eb',
        fontSize: 40,
        fontFamily: 'Raleway_600SemiBold',
        marginTop: 60,
        marginBottom: 30,
    },
})

export default Highlights;