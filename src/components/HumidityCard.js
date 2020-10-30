import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HumidityCard = ({ humidity }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.cardTitle}>Humidity</Text>
            <Text style={styles.humidity}>{humidity}<Text style={styles.percentage}>%</Text></Text>
            <View style={styles.humidityGauge}>
                <View style={styles.gaugeTopLabelRow}>
                    <Text style={styles.gaugeLabel}>0</Text>
                    <Text style={styles.gaugeLabel}>50</Text>
                    <Text style={styles.gaugeLabel}>100</Text>
                </View>
                <View>
                    <View style={styles.gaugeBackground}></View>
                    <View style={[styles.gaugeColorMeter, {width: `${humidity}%`}]} ></View>
                </View>
                <View style={styles.gaugeBottomLabelRow}>
                    <Text style={styles.gaugeLabel}>%</Text>
                </View>
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

export default HumidityCard;