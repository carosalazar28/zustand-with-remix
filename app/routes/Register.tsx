import { Form } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import useAuth from "~/context/auth";

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Register" },
  ];
};

export default function Register() {
  const handleLogin = useAuth((state) => state.login)
  return (
    <div className="flex justify-center items-center flex-grow">
      <div className="w-80">
        <h1 className="text-3xl my-4">Register</h1>
        <p className="my-2">This is the register page</p>
        <Form
          className="flex flex-col gap-y-2"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted");
            handleLogin('logued');
          }}
        >
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button
            type="submit"
            className="bg-yellow p-2 mt-2 rounded-md hover:bg-orange"
          >
            Register
          </button>
        </Form>
      </div>
    </div>
  )
}