import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class RegisterForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="What's your email?"
                        placeholder='email@adress'
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Type your secure password'
                        placeholder='passw0rd'  
                    />
                </CardSection>
            </Card>
        );
    }
}

export default RegisterForm;

