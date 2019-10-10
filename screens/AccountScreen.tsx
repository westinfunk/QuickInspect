
import React from 'react';
import { Card, Text, ListItem } from 'react-native-elements';
import { string } from 'prop-types';
import Account from '../model/Account';
import { AsyncStorage } from 'react-native';
import { getAccount } from '../controller/AccountController';
import logError from '../utils/ErrorHandler';

export interface Props {}

interface State {
    id: string;
    account?: Account;
}

export default class AccountScreen extends React.Component<Props, State> {
    state = {
        id: "",
        account: null
    }

    async componentDidMount() {
        try {
            /*
            const id = await AsyncStorage.getItem('accountId');
            */
            const id = "Account-" + Date.now();
            const account = await getAccount(id);
            this.setState({id, account});
            
        } catch(err) {
            console.log()
        }
    }



    render() {
        return (
            <Card title="Account">
                <ListItem title=""/>
            </Card>
        )
    }
}