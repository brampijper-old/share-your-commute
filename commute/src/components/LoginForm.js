import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { CardSection, Button } from './common'; 

class LoginForm extends Component {
    render() {
        const { textStyle, textContainerStyle, imageContainerStyle } = styles; 
        return (
            <View>
                <CardSection style={imageContainerStyle}>
                    <Image 
                        style={{ width: 150, height: 150 }}
                        source={require('./images/icon.png')}
                    />
                </CardSection>

                <CardSection style={textContainerStyle}>
                    <Text style={textStyle}> Register for free! </Text>
                </CardSection>

                <CardSection>
                    <Button>
                        Register
                    </Button>
                </CardSection>

                <CardSection>
                    <Button>
                        Continue with Google
                    </Button>
                </CardSection>

                <CardSection style={textContainerStyle}>
                    <Text style={textStyle}> Already a user? </Text>
                </CardSection>

                <CardSection>
                    <Button>
                        Login-In
                    </Button>
                </CardSection>
            
            </View>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textContainerStyle: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        backgroundColor: '#FF5733'
    }
}; 

export default LoginForm;
