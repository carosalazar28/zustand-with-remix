import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import useCharacters from "~/context/characters";

// Import Swiper styles
import 'swiper/css';
import { Slide } from "~/components/Slide";
    
export const meta: MetaFunction = () => {
  return [
    { title: "Dragon Ball" },
    { name: "description", content: "Welcome" },
  ];
};

export default function Index() {
  const fecthCharacter = useCharacters((state) => state.fetch)

  const characters = useCharacters((state) => state.characters)

  useEffect(() => {
    fecthCharacter()
    console.log(characters)
  }, [])
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Dragon Ball</h1>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {characters?.map((character) => (
        <SwiperSlide key={character.id}>
          <Slide {...character}/>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}
