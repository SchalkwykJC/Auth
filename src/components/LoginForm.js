import React, {Component} from 'react';
import firebase from 'firebase';
import {Text} from 'react-native';
import {Button, CardSection, Card, Input, Spinner} from './common';

class LoginForm extends Component {

    state = {email: '', password: '', error: '', loading: false};

    //Helper function for login
    onButtonPress() {
        const {email, password} = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
                    /* 
                    .catch(() => {
                        this.setState({error: 'Authentication Failed!'});
                    });
                    */
            });
    }

    //Helper function to render login or spinner
    renderButton(){
        if (this.state.loading){
            return <Spinner size='small'/>;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        );
    }

    //Helper function for successful login
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    //Helper function for failed login
    onLoginFail(){
        this.setState({
            error: 'Authentication Failed!',
            loading: false
        });
    }

    render(){
        return(
            <Card>         

                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Input
                        placeholder='user@domain.com'
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}/>
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}/>
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;