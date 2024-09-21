import type { MetaFunction } from "@remix-run/node";

import { Form, useNavigate } from "@remix-run/react";
import useAuth from "~/context/auth";
import Input from "~/components/ui/Input";
import Button from "~/components/ui/Button";

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Register Dragon Ball" },
  ];
};

export default function Register() {
  const navigate = useNavigate();
  const handleLogin = useAuth((state) => state.login)
  return (
    <div className="flex justify-center items-center flex-grow">
      <div className="w-80">
        <h1 className="text-3xl my-4">Register</h1>
        <Form
          className="flex flex-col gap-y-2"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted");
            handleLogin('logued');
            navigate("/")
          }}
        >
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" name="email" placeholder="Type your email" />
          <label htmlFor="password">Password</label>
          <Input type="password" id="password" name="password" placeholder="Type your password" />
          <Button type="submit" text="Register"/>
        </Form>
        <span className="my-2 block">
          <p className="contents">
            Already have an account?
          </p>
          {' '}
          <a href="/login" className="text-blue">Login</a>
        </span>
      </div>
    </div>
  )
}