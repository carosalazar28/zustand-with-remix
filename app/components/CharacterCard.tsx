interface Props {
  name: string;
  race: string;
  ki: string;
  image: string;
}

export default function CharacterCard(props: Props) {
  const { name, race, ki, image } = props
  return (
    <article
      className="max-w-fit min-w-64 rounded-md bg-yellow-50 shadow-yellow-200 shadow-lg"
    >
      <section className="flex justify-center">
        <img 
          src={image}
          alt="character"
          className="max-w-80 max-h-64 transition duration-300 transform hover:scale-125"
        />
      </section>
      <section className="p-5">
        <p className="text-lg font-bold">{name}</p>
        <section className="flex justify-between">
          <p>{race}</p>
          <p>{ki}</p>
        </section>
      </section>
    </article>
  )
}