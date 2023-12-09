import { useState, useContext } from "react";
import { useForm } from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);

    const [errors, setErrors] = useState({});

    const { values, onChange, onSubmit } = useForm(
        async (e) => {
            try {
                if (values[RegisterFormKeys.Password] !== values[RegisterFormKeys.ConfirmPassword]) {
                    throw new Error("Passwords do not match");
                } else {
                    await registerSubmitHandler(e);
                }
            } catch (error) {
                setErrors({ message: error.message });
            }
        },
        {
            [RegisterFormKeys.Email]: '',
            [RegisterFormKeys.Password]: '',
            [RegisterFormKeys.ConfirmPassword]: '',
        }
    );

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    {errors && errors.message && <p className="error">{errors.message}</p>}
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Email]}
                        required
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Password]}
                        required
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        onChange={onChange}
                        value={values[RegisterFormKeys.ConfirmPassword]}
                        required
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have a profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
