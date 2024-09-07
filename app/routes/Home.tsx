import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Home" },
  ];
};

export default function Login() {

  return (
    <div className="flex justify-center items-center flex-grow">

    </div>
  )
}