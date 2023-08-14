import { FormEvent, useState } from "react";
import { UserLogin } from "../types";
import { Link } from "react-router-dom";

const Register = () => {

    const [fieldState, setFieldState] = useState<UserLogin>({
        emailid: "",
        password: "",
    });

    const [fieldErrorState, setFieldErrorState] = useState<Partial<UserLogin>>({
        emailid: "",
        password: "",
    });

    const validateForm = (userData: UserLogin) => {
        if (userData.password.length > 20) {
            setFieldErrorState({
                password: "Password cannot be greater than 20 characters"
            })
            return false;

        }
        if (userData.password.length < 8) {
            setFieldErrorState({
                password: "Password cannot be less than 8 characters"
            })
            return false;

        }
        return true;
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm(fieldState)) {
            localStorage.setItem("userLoginData", JSON.stringify(fieldState));
            alert("Login succesful")
        }
    };

    return (
        <div className="mx-20">
            <h1 className="text-4xl font-extrabold mb-6">Login to your account</h1>
            <form className="flex flex-col " onSubmit={handleSubmit}>

                <label htmlFor="name" className="text-xl font-bold">Email ID</label>
                <p>{fieldErrorState.emailid}</p>

                <input className="border border-black rounded-md px-2 py-1" type="email" required name="emailid" id="emailid" value={fieldState?.emailid} onChange={(event) => {
                    setFieldState(state => {
                        return {
                            ...state,
                            emailid: event.target.value
                        }
                    })
                }} />

                <label htmlFor="name" className="text-xl font-bold">Enter your password</label>
                <p>{fieldErrorState.password}</p>
                <input className="border border-black rounded-md px-2 py-1" type="text" required name="password1" id="password1" value={fieldState?.password} onChange={(event) => {
                    setFieldState(state => {
                        return {
                            ...state,
                            password: event.target.value
                        }
                    })
                }} />

                <button type="submit" className="bg-green-600 hover:bg-green-400 transition-all rounded-md my-2 px-2 py-2 text-white">
                    Submit
                </button>
            </form>
            <Link to="/register">Don't have an account? Register</Link>
        </div>
    );
}

export default Register;