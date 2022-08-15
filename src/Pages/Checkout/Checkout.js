import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Checkout.css';

const Checkout = () => {
    const { checkoutId } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => alert("Thank you for the booking!");
    console.log(errors);


    return (
        <div>
            <h2 className='pt-5'>Your selected package id: {checkoutId}</h2>
            <form className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} /> <br />
                <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} /> <br />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /> <br />
                <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} /> <br />
                <select {...register("Title", { required: true })}>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Checkout;