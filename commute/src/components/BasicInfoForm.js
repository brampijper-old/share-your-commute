import React, { Component } from 'react';
import { View, Text, SegmentedControlIOS } from 'react-native';
import { connect } from 'react-redux';
import { Input, CardSection, Card, Title } from './common/';
import { usernameChanged } from '../actions/';

class BasicInfoForm extends Component {
    state = { selectedIndex: 0 };
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

            <Card>
                <CardSection style={{ flexDirection: 'column', justifyContent: 'space-between' }} >
                    <Text style={{ paddingBottom: 10, fontSize: 18 }} >
                        Your gender:
                    </Text>
                    <SegmentedControlIOS
                        values={['Male', 'Female', 'None']}
                        selectedIndex={this.state.selectedIndex}
                        onChange={(event) => {
                            this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
                        }}
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
