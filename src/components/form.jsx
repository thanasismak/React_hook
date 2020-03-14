import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// https://react-hook-form.com/
const Example = ({ ...props }) => {
    const { handleSubmit, register, errors } = useForm();
    const [form, setForm] = useState({});

    useEffect(() => {
        setForm({
            phone: props.form[0],
            email: props.form[1],
            password: props.form[2],
        });
    }, []);

    const onSubmit = values => {
        if (isNaN(values)) {
            return errors.email && errors.email.message
        }
        else {
            console.log(1)
        }

    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {props.form && props.form.map((o, index) =>
                // errors.email && errors.email.message &&
                <input
                    key={index}
                    className="inputF"
                    name={o}
                    placeholder={o}
                    ref={o === form.email ? register({
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address"
                        }
                    }) : o === form.phone ? register({
                        maxLength: 13,
                        required: true,
                        minLength: 13,
                        pattern: {
                            value: /\+30[0-9](?:2)|(?:(?:6))$/i,
                            message: "invalid phone field"
                        }
                    }) : register({ //password
                        required: true,
                        minLength: 8,
                        message: "invalid password field"
                    })
                    }
                />
            )}
            {errors.username && errors.username.message}
            <button className="buttonF" type="submit">{props.btn}</button>
        </form>
    );
};
export default Example;
