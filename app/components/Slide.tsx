interface Props {
  id: number;
  image: string;
  name: string;
}

export function Slide (item: Props) {
  return (
    <div className="h-80">
      <img className="h-fit" src={item.image} alt={item.name} />
    </div>
  )
}