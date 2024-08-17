interface InputProps {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
}

export default function Input(props: InputProps) {
  const { type, id, name, placeholder } = props

  return (
    <input
      className="border-2 border-gray-300 rounded-md p-2 w-full"
      type={type}
      placeholder={placeholder}
      id={id}
      name={name} />
  )
}