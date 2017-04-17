import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount(){
        firebase.initializeApp({
        apiKey: 'AIzaSyBLW3nBm9R8f4-pAtf-BCdnfQ-mhoLnyF8',
        authDomain: 'authentication-54bc6.firebaseapp.com',
        databaseURL: 'https://authentication-54bc6.firebaseio.com',
        projectId: 'authentication-54bc6',
        storageBucket: 'authentication-54bc6.appspot.com',
        messagingSenderId: '916892906855'
        });
    }

    render(){
        return (
            <View>
                <Header headerText='Auth'/>
                <LoginForm/>
            </View>
            
        );
    }
}

export default App;