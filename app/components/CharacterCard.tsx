import Resume from "./Resume";

interface Props {
  name: string;
  race: string;
  ki: string;
  image: string;
  description: string;
}

export default function CharacterCard(props: Props) {
  const { name, race, ki, image, description } = props

  return (
    <article
      className="group max-w-fit min-w-64 rounded-md bg-yellow-50 shadow-yellow-200 shadow-lg relative"
    >
      <section className="flex justify-center">
        <img 
          src={image}
          alt="character"
          height={256}
          className="max-w-80 max-h-64 transition duration-300 transform group-hover:scale-125"
          // style={{ maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(1, 1, 1, 1))'}}
        />
      </section>
      <section className="group-hover:hidden p-5">
        <p className="text-lg font-bold">{name}</p>
        <section className="flex justify-between">
          <p>{race}</p>
          <p>{ki}</p>
        </section>
      </section>
      <Resume description={description} />
    </article>
  )
}