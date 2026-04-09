import Icon from './Icon'

function ReviewStars() {
  return (
    <div aria-hidden="true" className="flex items-center gap-1 text-[#f5b847]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon className="size-4" key={index} name="star" />
      ))}
    </div>
  )
}

export default ReviewStars
