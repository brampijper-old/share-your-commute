import React from 'react'; 
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import BasicInfoForm from './components/BasicInfoForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>

                <Scene key="start" hideNavBar>
                    <Scene key="startOptions" component={LoginForm} initial />
                </Scene>

                <Scene key="register" hideNavBar>
                    <Scene key="registerStart" component={RegisterForm} />
                    <Scene key="basicInfo" component={BasicInfoForm} />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;

