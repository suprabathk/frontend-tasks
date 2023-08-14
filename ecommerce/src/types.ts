export type UserRegister = {
    name: string,
    emailid: string,
    phoneno: string,
    address: string,
    password1: string,
    password2: string   
}

export type UserLogin = {
    emailid: string,
    password: string,
}