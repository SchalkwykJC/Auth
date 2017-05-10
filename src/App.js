import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Button, Spinner, CardSection} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {

    state = {loggedIn: null};

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyBLW3nBm9R8f4-pAtf-BCdnfQ-mhoLnyF8',
            authDomain: 'authentication-54bc6.firebaseapp.com',
            databaseURL: 'https://authentication-54bc6.firebaseio.com',
            projectId: 'authentication-54bc6',
            storageBucket: 'authentication-54bc6.appspot.com',
            messagingSenderId: '916892906855'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

     renderContent(){
        switch (this.state.loggedIn){
            case true:
                return (
                    <CardSection><Button onPress={() => firebase.auth().signOut()}>Logout</Button></CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return <View style={{marginTop: 20}}><Spinner size='large'/></View>;
        }
    }

    render(){
        return (
            <View>
               <Header headerText='Auth'/>
               {this.renderContent()}
            </View>
            
        );
    }
}

export default App;