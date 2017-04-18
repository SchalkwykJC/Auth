import React, {Component} from 'react';
import {Button, CardSection, Card, Input} from './common'

class LoginForm extends Component {

    state = {email: '', password: ''};

    render(){
        return(
            <Card>         
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
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;