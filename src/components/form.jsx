import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// https://react-hook-form.com/

const Example = ({ ...props }) => {
    const { handleSubmit, register } = useForm();
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState();

    useEffect(() => {
        setForm({
            phone: props.form[0],
            email: props.form[1],
            password: props.form[2],
        });
    }, []);

    const onSubmit = values => {
        if (isNaN(values[form.phone])) {
            setErrors({ field: form.phone, message: 'phone field should contain numbers' });
        }
        else if (!(values[form.email].indexOf('@') != -1)) {
            setErrors({ field: form.email, message: 'invalid email field' });
        }
        else if (values[form.password].length < 8) {
            setErrors({ field: form.password, message: 'password should be at least 8 digit' });
        }
        console.log(values)
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {errors && <span style={{ color: 'red' }}>&#9888;{errors.message}</span>}
            {props.form && props.form.map((o, index) =>
                // {errors.email && errors.email.message &&}
                <div key={index} >
                    <input
                        key={index}
                        className="inputF"
                        name={o}
                        placeholder={o}
                        ref={o === form.email ? register({
                            required: true,
                        }) : o === form.phone ? register({
                            maxLength: 13,
                            required: true,
                            minLength: 13,
                        }) : register({ //password
                            required: true,
                        })
                        }
                    />
                </div>
            )
            }
            <button className="buttonF" type="submit">{props.btn}</button>
        </form >
    );
};
export default Example;
