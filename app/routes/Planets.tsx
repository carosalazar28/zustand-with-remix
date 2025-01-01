import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from "swiper/types";
import { Pagination } from "swiper/modules";

import usePlanets from "~/context/planets";
import { isMobile } from "~/utils/device";
import { Slide } from "~/components/Slide";

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/pagination';

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Planet" },
  ];
};

export default function Planets() {
  const fecthCharacter = usePlanets((state) => state.fetch)

  const planets = usePlanets((state) => state.planets)

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
          {planets?.map((character) => (
            <SwiperSlide key={character.id}>
              <Slide {...character}/>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
}