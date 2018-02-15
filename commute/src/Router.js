import React from 'react'; 
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="login" component={LoginForm} title="Please Login" initial />
            </Scene>
        </Router>
    );
};

export default RouterComponent;

