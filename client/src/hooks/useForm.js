import { useState } from "react";

export function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitHandler(values);
            setErrors({}); 
        } catch (error) {
           
            setErrors({ message: error.message }); 
        }
    };

    return {
        values,
        errors,
        onChange,
        onSubmit,
    };
}
