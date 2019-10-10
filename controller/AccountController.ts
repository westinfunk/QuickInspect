import Account from '../model/Account';

export const getAccount = async function(id: string): Promise<Account> {
    const account = {
        id: id,
        company: "Inspect 808",
        email: "abc@alphabet.com",
        name: "Bob Kraft"
    }
    return new Account(account);
}