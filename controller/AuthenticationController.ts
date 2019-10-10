import Account from '../model/Account';
import { AsyncStorage } from 'react-native';
import logError from '../utils/ErrorHandler';


export const login = async function(loginRequest: LoginRequest): Promise<Account> {
    try {
        /* do networking here */
        const email = loginRequest.email;
        const password = loginRequest.password;
        if (email == "abc@alphabet.com" && password == "1234") {
            return new Account({ 
                id: "4798237", 
                name: "Bob Hole", 
                company: "5 Star Inspections",
                email: "abc@alphabet.com"
            })
        } else {
            throw Error("Incorrect email or password");
        }
    } catch(err) {
        
    }
}

export const signup = async function(signupRequest: SignupRequest): Promise<Account> {
    try {
        return new Account({ 
            id: "4798237", 
            name: signupRequest.name,
            company: "5 Star Inspections",
            email: signupRequest.email
        })
    } catch(err) {

    }
}



export interface ForgotPasswordResponse {
    message: string;
}

export const forgotPassword = async function(forgotPasswordRequest: ForgotPasswordRequest) {

}