import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const WindCard = ({ speed, direction, directionCompass }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.cardTitle}>Wind Speed</Text>
            <Text style={styles.humidity}>
                {Math.round(speed)}
                <Text style={styles.percentage}> mph</Text>
            </Text>
            <View style={styles.compass}>
                <Feather name="arrow-up-circle" style={[styles.compassIcon, { transform: [{ rotate: `${Math.round(direction)}deg` }]}]} />
                <Text style={styles.compassText}>{directionCompass}</Text>
            </View>
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
        fontSize: 60
    },
    percentage: {
        color: '#e7e7eb',
        fontFamily: 'Raleway_400Regular',
        fontSize: 40
    },
    compass: {
        flexDirection: 'row',
    },
    compassIcon: {
        color: '#e7e7eb',
        fontSize: 24,
        marginRight: 8,
    },  
    compassText: {
        color: '#e7e7eb',
        fontFamily: 'Raleway_400Regular',
        fontSize: 20
    }

})

export default WindCard;