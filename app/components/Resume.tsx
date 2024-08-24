import Modal from "./ui/Modal";

interface Props {
  description: string
}

export default function Resume(props: Props) {
  const { description } = props

  const textTruncate = description.length > 200;
  
  const descriptionEllipsis = textTruncate
  ? description.slice(0, 200) 
  : description

  return (
    <div className="hidden group-hover:block resume-container absolute left-0 top-[60%] bg-gray-opacity w-64 h-44 shadow-md">
      <Modal>
        <div className="resume-container__text text-xs h-full p-3">
          <p className="h-full">{`${descriptionEllipsis}${textTruncate ? '...' : ''}`}</p>
        </div>
      </Modal>
    </div>
  )
}