import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  ViewPropTypes,
} from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';

const AppText = ({ style, children, ...props }) => {
    let [fontsLoaded] = useFonts({
        Raleway_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        const baseStyle = StyleSheet.create({
            fontFamily: 'Raleway_400Regular',
            fontSize: 10,
        });
        let newStyle;
        if (Array.isArray(style)) {
            newStyle = [baseStyle, ...style];
        } else {
            newStyle = [baseStyle, style];
        }

        return (
            <Text {...props} style={newStyle}>
            {children}
            </Text>
        );
    }
};

AppText.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

AppText.defaultProps = {
  style: {},
};

export default AppText;