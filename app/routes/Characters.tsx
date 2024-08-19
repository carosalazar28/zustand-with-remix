import type { MetaFunction } from "@remix-run/node";
import CharacterCard from "~/components/CharacterCard";

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Characters Dragon Ball" },
  ];
};

export default function Characters() {
  return (
    <div className="px-3 w-4/5 mx-auto">
      <h1 className="text-3xl mb-10">Characters</h1>
      <div className="text-gray-dark font-mono grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CharacterCard name="Goku" race="kde" ki="232" image="https://dragonball-api.com/characters/goku_normal.webp" />
      </div>
    </div>
  )
}