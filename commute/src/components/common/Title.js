import React from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './CardSection';

const Title = (props) => {
    const { textContainerStyle, headerTextStyle } = styles;
    return (
        <View>
            <CardSection style={[textContainerStyle, props.style]}>
                {props.children}
                <Text style={headerTextStyle}>
                    {props.titleText}
                </Text>
            </CardSection>
        </View>
    ); 
};

const styles = {
    headerTextStyle: {
        fontSize: 30,
        alignSelf: 'center',
        color: '#001f3f',
        fontWeight: 'bold',
    },
    textContainerStyle: {
        backgroundColor: '#01FF70', 
        height: 250, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}; 

export { Title };
