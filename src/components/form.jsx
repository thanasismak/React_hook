import React from "react";
import { useForm } from "react-hook-form";
// https://react-hook-form.com/
const Example = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
                className="inputF"
                name="YourPhone"
                placeholder="YourPhone"
                ref={register({
                    required: 'Required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                    }
                })}
            />
            {errors.email && errors.email.message}

            <input
                className="inputF"
                name="YourEmail"
                placeholder="YourEmail"
                ref={register({
                    validate: value => value !== "admin" || "Nice try!"
                })}
            />
            {errors.username && errors.username.message}

            <input
                className="inputF"
                name="Password"
                placeholder="YourEmail"
                ref={register({
                    validate: value => value !== "admin" || "Nice try!"
                })}
            />
            {errors.username && errors.username.message}
            <button className="buttonF" type="submit">Submit</button>
        </form>
    );
};
export default Example;