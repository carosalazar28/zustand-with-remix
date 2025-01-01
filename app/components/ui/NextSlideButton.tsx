import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function PreviousSlideButton({ handleClick }: { handleClick: () => void }) {
  return (
    <button onClick={handleClick} className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-gray-light rounded-full">
      <ChevronLeftIcon className="h-6 w-6 text-gray-dark"/>
    </button>
  )
}