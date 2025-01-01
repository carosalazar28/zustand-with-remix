import { useSwiper } from "swiper/react"

import PreviousSlideButton from "./ui/PreviousSlideButton"
import NextSlideButton from "./ui/NextSlideButton"

export default function NavigationSlide() {
  const swiper = useSwiper();
  console.log('heree', swiper);
  const handlePreviousSlide = () => swiper.slidePrev();
  const handleNextSlide = () => swiper.slideNext();

  return (
    <>
      <PreviousSlideButton handleClick={handlePreviousSlide} />
      <NextSlideButton handleClick={handleNextSlide} />
    </>
  )
}