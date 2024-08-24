import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";

import InfiniteScroll from 'react-infinite-scroll-component';

import CharacterCard from "~/components/CharacterCard";
import Skeleton from "~/components/Skeleton";
import useCharacters from "~/context/characters";

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Characters Dragon Ball" },
  ];
};

export default function Characters() {
  const fecthCharacter = useCharacters((state) => state.fetch)
  const fetchMoreCharacter = useCharacters((state) => state.fetchMore)
  const characters = useCharacters((state) => state.characters)

  useEffect(() => {
    fecthCharacter()
  }, [])

  return (
    <div className="px-3 w-4/5 mx-auto">
      <h1 className="text-3xl mb-10">Characters</h1>
      <div 
        id="characters-container"
        className="text-gray-dark font-mono"
      >
        <InfiniteScroll
          dataLength={characters.length}
          next={fetchMoreCharacter}
          hasMore
          loader={
            Array.from({ length: 6 }).map((_, index) => (<Skeleton key={index} />))
          }
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
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