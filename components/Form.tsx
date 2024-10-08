"use client"; // This directive makes the component a client component

import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useUser } from '@clerk/nextjs'; // Assuming you're using Clerk

interface CartItem {
  item: {
    title: string;
    // Add other properties as needed
  };
  quantity: number;
}

interface ContactFormProps {
  cartItems: CartItem[];
}

function ContactForm({ cartItems }: ContactFormProps) {
  const [state, handleSubmit] = useForm("xrbzeale");

  const defaultMessage = cartItems.map(item => 
    `Item: ${item.item.title}, Quantity: ${item.quantity}`
  ).join('\n');

  if (state.succeeded) {
    return <p className="text-lg text-green-600">Ta demande est envoyée</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center text-center gap-4 w-full max-w-md">
      <label htmlFor="email" className="flex flex-col items-start gap-2 w-full">
        <span className="text-lg text-slate-600">Email Address</span>
        <input
          id="email"
          type="email" 
          name="email"
          className="border border-slate-600 bg-slate-50 text-slate-400 p-2 rounded-md w-full"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </label>

      <label htmlFor="message" className="flex flex-col items-start gap-2 w-full">
        <span className="text-lg text-slate-600">Demande:</span>
        <textarea
          id="message"
          name="message"
          defaultValue={`vous produits:\n${defaultMessage}\nAddress:\nNumber:`} 
          className="border border-slate-600 bg-slate-50 text-slate-400 p-2 rounded-md w-full min-h-[200px] max-h-[900px]"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </label>

      <button type="submit" disabled={state.submitting} className="bg-blue-600 text-white py-2 px-8 rounded-md">
        Submit
      </button>
    </form>
  );
}

interface FormProps {
  cartItems: CartItem[];
}

function Form({ cartItems }: FormProps) {
  const { isSignedIn } = useUser(); // Assuming you're using Clerk

  useEffect(() => {
    if (!isSignedIn) {
      // Optionally, redirect the user to the sign-in page or handle it accordingly
      window.location.href = '/sign-in'; // This will redirect to the sign-in page
    }
  }, [isSignedIn]);

  // Only render the form if the user is signed in
  if (!isSignedIn) {
    return null; // Optionally, you could return a loading spinner or message here
  }

  return <ContactForm cartItems={cartItems} />;
}

export default Form;
