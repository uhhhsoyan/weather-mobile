import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const Highlights = ({ weatherToday }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Highlights</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1e213a',
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
})

export default Highlights;