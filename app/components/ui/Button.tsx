interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export default function Button(props: ButtonProps) {
  const { text, type, onClick, className } = props
  const classNames = 
    `bg-yellow text-gray p-2 mt-2 rounded-md hover:bg-orange hover:text-text-gray-light ${className}`

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
    >
      {text}
    </button>
  )
}