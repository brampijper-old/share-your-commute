import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Input, CardSection, Card, Title } from './common/';
import { usernameChanged } from '../actions/';

class BasicInfoForm extends Component {
    onUsernameChange(text) {
        this.props.usernameChanged(text);
    }
    render() {
        return (
            <View>
                <Title 
                    style={{ height: 150 }}
                    titleText='Your basic info'
                />
            <Card>
                <CardSection>
                    <Input
                        label='Type your username:'
                        placeholder='katykit19'
                        onChangeText={this.onUsernameChange.bind(this)}
                    />
                </CardSection>
            </Card>
        </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.basicInfo.username
    };
};

export default connect(mapStateToProps, { usernameChanged })(BasicInfoForm);
