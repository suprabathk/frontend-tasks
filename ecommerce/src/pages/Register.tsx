import { FormEvent, useState } from "react";
import { UserRegister } from "../types";
import { Link } from "react-router-dom";

const Register = () => {

    const [fieldState, setFieldState] = useState<UserRegister>({
        name: "",
        address: "",
        emailid: "",
        password1: "",
        password2: "",
        phoneno: ""
    });

    const [fieldErrorState, setFieldErrorState] = useState<Partial<UserRegister>>({
        name: "",
        address: "",
        emailid: "",
        password1: "",
        password2: "",
        phoneno: ""
    });

    const validateForm = (userData: UserRegister) => {
        if (userData.name.length < 3) {
            setFieldErrorState({
                name: "Name cannot be less than 3 characters"
            })
            return false;
        }
        if (userData.name.length > 20) {
            setFieldErrorState({
                name: "Name cannot be greater than 20 characters"
            })
            return false;

        }
        if (userData.address.length < 20) {
            setFieldErrorState({
                address: "Address cannot be less than 20 characters"
            })
            return false;

        }
        if (userData.address.length > 50) {
            setFieldErrorState({
                address: "Address cannot be greater than 50 characters"
            })
            return false;

        }
        if (userData.password1.length > 20) {
            setFieldErrorState({
                password1: "Password cannot be greater than 20 characters"
            })
            return false;

        }
        if (userData.password1.length < 8) {
            setFieldErrorState({
                password1: "Password cannot be less than 8 characters"
            })
            return false;

        }
        if (userData.password1 !== userData.password2) {
            setFieldErrorState({
                password2: "Passwords do not match"
            })
            return false;

        }
        return true;
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm(fieldState)) {
            localStorage.setItem("userData", JSON.stringify(fieldState));
            alert("Registeration succesful")
        }
    };

    return (
        <div className="mx-20">
            <h1 className="text-4xl font-extrabold mb-4">Create your account</h1>
            <form className="flex flex-col " onSubmit={handleSubmit}>
                <label htmlFor="name" className="text-xl font-bold">Name</label>
                <p className="text-red-600">{fieldErrorState.name}</p>
                <input className="border border-black rounded-md px-2 py-1" type="text" required name="name" id="name" value={fieldState?.name} onChange={(event) => {
                    setFieldState(state => {
                        return {
                            ...state,
                            name: event.target.value
                        }
                    })
                }} />
                <label htmlFor="name" className="text-xl font-bold">Email ID</label>
                <p className="text-red-600">{fieldErrorState.emailid}</p>

                <input className="border border-black rounded-md px-2 py-1" type="email" required name="emailid" id="emailid" value={fieldState?.emailid} onChange={(event) => {
                    setFieldState(state => {
                        return {
                            ...state,
                            emailid: event.target.value
                        }
                    })
                }} />
                <label htmlFor="name" className="text-xl font-bold">Mobile Number</label>
                <p className="text-red-600">{fieldErrorState.phoneno}</p>

                <input className="border border-black rounded-md px-2 py-1" type="tel" required name="phoneno" id="phoneno" value={fieldState?.phoneno} onChange={(event) => {
                    setFieldState(state => {
                        return {
                            ...state,
                            phoneno: event.target.value
                        }
                    })
                }} />
                <label htmlFor="name" className="text-xl font-bold">Address</label>
                <p className="text-red-600">{fieldErrorState.address}</p>

                <textarea className="border border-black rounded-md px-2 py-1" name="address" required id="address" value={fieldState?.address} onChange={(event) => {
                    setFieldState(state => {
                        return {
                            ...state,
                            address: event.target.value
                        }
                    })
                }} />
                <label htmlFor="name" className="text-xl font-bold">Set your password</label>
                <p className="text-red-600">{fieldErrorState.password1}</p>
                <input className="border border-black rounded-md px-2 py-1" type="text" required name="password1" id="password1" value={fieldState?.password1} onChange={(event) => {
                    setFieldState(state => {
                        return {
                            ...state,
                            password1: event.target.value
                        }
                    })
                }} />
                <label htmlFor="name" className="text-xl font-bold">Re-enter the password</label>
                <p className="text-red-600">{fieldErrorState.password2}</p>
                <input className="border border-black rounded-md px-2 py-1" type="text" required name="password2" id="password2" value={fieldState?.password2} onChange={(event) => {
                    setFieldState(state => {
                        return {
                            ...state,
                            password2: event.target.value
                        }
                    })
                }} />
                <button type="submit" className="bg-green-600 hover:bg-green-400 transition-all rounded-md my-2 px-2 py-2 text-white">
                    Submit
                </button>
            </form>
            <Link to="/login">Already have an account? Login</Link>
        </div>
    );
}

export default Register;