import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AirPressureCard = ({ airPressure }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.cardTitle}>Air Pressure</Text>
            <Text style={styles.humidity}>
                {Math.round(airPressure)}
                <Text style={styles.percentage}> mb</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1e213a',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        height: '23%'
    },
    cardTitle: {
        color: '#e7e7eb',
        fontFamily: 'Raleway_500Medium',
        fontSize: 20
    },  
    humidity: {
        color: '#e7e7eb',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 60,
        marginBottom: 30,
    },
    percentage: {
        color: '#e7e7eb',
        fontFamily: 'Raleway_400Regular',
        fontSize: 40
    },
    humidityGauge: {
        width: '80%',
    },
    gaugeTopLabelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    gaugeLabel: {
        color: '#e7e7eb',
        fontFamily: 'Raleway_400Regular',
        fontSize: 14
    },
    gaugeBackground: {
        height: 5,
        backgroundColor: '#e7e7eb'
    },
    gaugeColorMeter: {
        height: 5,
        backgroundColor: '#ffec65',
        position: 'absolute'
    },
    gaugeBottomLabelRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }

})

export default AirPressureCard;