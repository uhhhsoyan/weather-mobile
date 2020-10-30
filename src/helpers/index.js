import React from 'react';
import { Image } from 'react-native';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const renderDate = (date = new Date()) => {
    var d = new Date(date);
    return `${DAYS_OF_WEEK[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}`
}

const renderWeatherIcon = (weatherType, size={height: 175, width: 175}) => {
    switch (weatherType) {
        case 'sn':
            return <Image style={size} source={require('../assets/icons/Snow.png')} />
        case 'sl':
            return <Image style={size} source={require('../assets/icons/Sleet.png')} />
        case 'h':
            return <Image style={size} source={require('../assets/icons/Hail.png')} />
        case 't':
            return <Image style={size} source={require('../assets/icons/Thunderstorm.png')} />
        case 'hr':
            return <Image style={size} source={require('../assets/icons/HeavyRain.png')} />
        case 'lr':
            return <Image style={size} source={require('../assets/icons/LightRain.png')} /> 
        case 's':
            return <Image style={size} source={require('../assets/icons/Shower.png')} />
        case 'hc':
            return <Image style={size} source={require('../assets/icons/HeavyCloud.png')} />
        case 'lc':
            return <Image style={size} source={require('../assets/icons/LightCloud.png')} />    
        default:
            return <Image style={size} source={require('../assets/icons/Clear.png')} />
    }
};

export {
    renderDate,
    renderWeatherIcon
};