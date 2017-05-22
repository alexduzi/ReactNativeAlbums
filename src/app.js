import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCZGtDH9cJfTr3i0SFzVuclRUcNy6hyCZY',
            authDomain: 'authentication-cba57.firebaseapp.com',
            databaseURL: 'https://authentication-cba57.firebaseio.com',
            projectId: 'authentication-cba57',
            storageBucket: 'authentication-cba57.appspot.com',
            messagingSenderId: '54329292883'
        });
    }

    render() {
        return (
            <View>
                <Header headerText={'Authentication'} />
                <LoginForm />
            </View>
        );
    }
};

export default App;