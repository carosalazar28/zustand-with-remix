interface Props {
  id: number;
  image: string;
  name: string;
}

export function Slide (item: Props) {
  return (
    <div className="h-80 m-auto w-fit">
      <img style={{ height: "-webkit-fill-available" }} src={item.image} alt={item.name} height="200" />
    </div>
  )
}