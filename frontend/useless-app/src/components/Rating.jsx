import { useId } from 'react'

export const Rating = ({ ratingValue, id }) => {
  const rating = Array.from(new Array(5)).fill('star')
  const ratingId = useId()

  return (
    <div className='rating rating-sm'>
      {rating.map((_item, index) => {
        return (
          <input
          key={`${ratingId}-${index}`}
          type='radio'
          name={`${rating}-${id}`}
          className='mask mask-star-2 bg-orange-400'
          readOnly
          checked={(index + 1) === ratingValue} />
        )}
      )}
    </div>
  )
}