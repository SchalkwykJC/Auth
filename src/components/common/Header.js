// Import libraries for importing component
import React from 'react';
import {Text,View} from 'react-native';

// Make a component
const Header = (props) => {

    // Avoids having duplicate references to styles on each control
    const {headerText, headerContainer} = styles;

    return (
        <View style={headerContainer}>
            <Text style={headerText}>{props.headerText}</Text>
        </View>        
    );
};

const styles = {
    headerContainer: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    headerText: {
        fontSize: 20,
    }
};

// Make the component available to the rest of the app
export {Header};