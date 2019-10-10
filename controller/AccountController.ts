import Account from '../model/Account';

export const getAccount = async function(id: string): Promise<Account> {
    const account = {
        id: id,
        companyName: "Inspect 808",
        email: "abc@alphabet.com",
        userName: "Username"
    }
    return new Account(account);
}