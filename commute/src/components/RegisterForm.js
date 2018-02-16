import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Title } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions/';

class RegisterForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: '#DDDDDD' }}> 
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button
                style={styles.buttonStyle} 
                onPress={this.onButtonPress.bind(this)}
            >
                Login
            </Button>
        ); 
    }
 
    render() {
        return (
            <View>
               
                <Title 
                    style={{ height: 250 }}
                    titleText='Your basic info'
                />
               
                <Card>
                    <CardSection style={{ backgroundColor: '#DDDDDD' }}>
                        <Input
                            autoCapitalize='none' 
                            label="What's your email?"
                            placeholder='email@adress'
                            onChangeText={this.onEmailChange.bind(this)}
                        />
                    </CardSection>

                    <CardSection style={{ backgroundColor: '#DDDDDD' }}>
                        <Input
                            secureTextEntry
                            label='Type your secure password'
                            placeholder='passw0rd'
                            onChangeText={this.onPasswordChange.bind(this)}  
                        />
                    </CardSection>

                    {this.renderError()}

                    <CardSection style={{ backgroundColor: '#DDDDDD' }}>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        paddingLeft: 5
    }
}; 


const mapStateToProps = state => { 
    return {
        email: state.register.email,
        password: state.register.password,
        error: state.register.error,
        loading: state.register.loading
    };
};

export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser 
})(RegisterForm);

