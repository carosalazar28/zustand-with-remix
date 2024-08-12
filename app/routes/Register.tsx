import { Form } from "@remix-run/react";

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <p>This is the register page</p>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted");
        }}
      >
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Register</button>
      </Form>
    </div>
  )
}