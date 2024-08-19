export default function Skeleton() {
  return (
    <div className="flex space-x-4">
      <div className="h-16 w-16 rounded-full bg-gray-200 animate-pulse"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-200 rounded-full animate-pulse w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded-full animate-pulse w-1/2 mt-2"></div>
      </div>
    </div>
  )
}