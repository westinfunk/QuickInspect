
import React from 'react';
import { Card, ListItem, Divider } from 'react-native-elements';
import { string } from 'prop-types';
import Account from '../model/Account';
import { AsyncStorage, View } from 'react-native';
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
            logError(err);
        }
    }
    
    renderAccountDetails() {
        const account = this.state.account;

        if (account) {
            return (
                <View>
                    <ListItem title={account.name} subtitle="Name"/>
                    <ListItem title={account.email} subtitle="Email"/>
                    <ListItem title={account.company} subtitle="Company"/>
                </View>
            )
        } else {
            return null;
        }
    }


    render() {
        return (
            <Card title="Account">
                {this.renderAccountDetails()}
            </Card>
        )
    }
}