import React from 'react'; 
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>

                <Scene key="start">
                    <Scene key="startOptions" component={LoginForm} initial />
                </Scene>

                <Scene key="register">
                    <Scene key="registerStart" component={RegisterForm} />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;

