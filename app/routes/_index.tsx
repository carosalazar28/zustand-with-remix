import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Dragon Ball" },
    { name: "description", content: "Welcome" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Dragon Ball</h1>

    </div>
  );
}