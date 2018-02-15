import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Button } from './common'; 

class LoginForm extends Component {
        
    onRegisterPress() {
        Actions.register();
    }

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
                    <Text style={textStyle}> New user? </Text>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.onRegisterPress(this)}>
                        Register
                    </Button>
                </CardSection>

                <CardSection>
                    <Button>
                        Continue with Google
                    </Button>
                </CardSection>

                <CardSection style={textContainerStyle}>
                    <Text style={textStyle}> Existing users: </Text>
                </CardSection>

                <CardSection>
                    <Button>
                        Log-In
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
