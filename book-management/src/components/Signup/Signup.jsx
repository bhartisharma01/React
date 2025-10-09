import { useState } from 'react'
import { Input, Select, Button, renderError } from '../index'
import { useForm } from "react-hook-form"

const Signup = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const { register, handleSubmit, watch, setValue, control, getValues, formState: { errors }, } = useForm({ mode: "onChange" });
    const onSubmit = (data) => {
        try {
            // setError(false);
            // setLoading(true);
            console.log("checking data...", data)
            // setLoading(false);
            console.log(watch("email"))
        } catch (error) {
            // setLoading(false)
            console.log(error.message)

        }
    }

    return (
        <>
            <div className="w-full">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Email"
                        placeholder="Email"
                        type="email"
                        className='mb-4'
                        {...register("email", { required: true })}
                    />
                    {renderError(errors, "email")}
                    <Input
                        label="Password"
                        placeholder="Password"
                        type="password"
                        className='mb-4'
                        {...register("password", { required: true, minLength: { value: 6, message: '6' }, maxLength: { value: 8, message: '8' } })}
                    />
                    {renderError(errors, "password")}
                    <Select
                        options={["admin", "user"]}
                        label="Role"
                        className='mb-4'
                        {...register("role", { required: true })}
                    />
                    {renderError(errors, "role")}
                    <Input
                        label="Username"
                        placeholder="Username"
                        type="text"
                        className='mb-4'
                        {...register("username", { required: true })}
                    />
                    {renderError(errors, "username")}
                    <Button type="submit" className="w-full">
                        Create Account
                    </Button>
                </form>
            </div>
        </>
    )
}

export default Signup


