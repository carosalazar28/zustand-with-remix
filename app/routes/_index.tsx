import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from "swiper/types";
import { Pagination } from "swiper/modules";

import useCharacters from "~/context/characters";
import { isMobile } from "~/utils/device";
import { Slide } from "~/components/Slide";

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/pagination';
    
export const meta: MetaFunction = () => {
  return [
    { title: "Dragon Ball" },
    { name: "description", content: "Welcome" },
  ];
};

export default function Index() {
  const fecthCharacter = useCharacters((state) => state.fetch)

  const characters = useCharacters((state) => state.characters)

  const mobile = isMobile();

  const swiperConfig: SwiperOptions = {
    spaceBetween: 50,
    slidesPerView: mobile ? 1 : 2,
    direction: mobile ? "vertical" : "horizontal",
    pagination: {
      dynamicBullets: true,
    },
    modules: [Pagination],
    onSlideChange: () => console.log('slide change'),
    onSwiper: (swiper) => console.log(swiper)
  }

  useEffect(() => {
    fecthCharacter()
  }, [])
  return (
    <div className="font-sans p-4">
        <Swiper {...swiperConfig} >
          {/* <NavigationSlide /> */}
          {characters?.map((character) => (
            <SwiperSlide key={character.id}>
              <Slide {...character}/>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
}
