import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';

class App extends Component {
    componentDidMount() {
        const config = {
            apiKey: 'AIzaSyB8stcgmNfrlQS2SFszPWKShESWiBELFR8',
            authDomain: 'commuting-47a30.firebaseapp.com',
            databaseURL: 'https://commuting-47a30.firebaseio.com',
            projectId: 'commuting-47a30',
            storageBucket: '',
            messagingSenderId: '364363747467'
        };
        firebase.initializeApp(config);
    }

    render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 
        return (
            <Provider store={store}>
              <Router />
            </Provider>
        );
    }
}

export default App;
