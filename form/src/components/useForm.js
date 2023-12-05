import { useEffect, useState } from "react";
import validation from "./validation";

const useForm = (submitForm) => {
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);
    return { handleChange, handleFormSubmit, values, errors };
};

export default useForm;
