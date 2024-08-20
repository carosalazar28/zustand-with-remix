import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";

import InfiniteScroll from 'react-infinite-scroll-component';

import CharacterCard from "~/components/CharacterCard";
import useCharacters from "~/context/characters";

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Characters Dragon Ball" },
  ];
};

export default function Characters() {
  const fecthCharacter = useCharacters((state) => state.fetch)
  const characters = useCharacters((state) => state.characters)

  useEffect(() => {
    fecthCharacter()
  }, [])

  return (
    <div className="px-3 w-4/5 mx-auto">
      <h1 className="text-3xl mb-10">Characters</h1>
      <div 
        id="characters-container"
        className="text-gray-dark font-mono grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
      >
        <InfiniteScroll
          dataLength={characters.length}
          next={fecthCharacter}
          hasMore
          loader={<div className="loader">Cargando...</div>}
        >
          {characters.length > 0 && characters.map((character) => (
            <CharacterCard
              key={character.id}
              {...character}
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  )
}