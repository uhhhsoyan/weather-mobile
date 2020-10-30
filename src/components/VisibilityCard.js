import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VisibilityCard = ({ visibility }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.cardTitle}>Visibility</Text>
            <Text style={styles.humidity}>
                {Math.round(visibility * 100) / 100}
                <Text style={styles.percentage}> miles</Text>
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
        marginBottom: 30
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

export default VisibilityCard;