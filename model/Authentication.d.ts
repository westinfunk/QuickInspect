declare interface LoginRequest {
    email: string;
    password: string;
}

declare interface SignupRequest {
    name: string;
    email: string;
    password: string;
}

declare interface ForgotPasswordRequest {
    email: string;
}