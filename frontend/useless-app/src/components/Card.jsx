import { useContext } from "react"
import { Rating } from "./Rating"
import { find, isEmpty, isEqual, matchesProperty, reject, uniqWith } from 'lodash'
import { WatchedContext } from "../routes/root"

export const WATCH_LIST_KEY = 'watch_list'

export default function ProductCard({ data }) {
  const { image, name, price, description, rate, id } = data
  const [_dollars, cents] = price.toString().split('.')
  const centsLength = cents.length
  const checkedRate = Math.floor(rate)

  const { setWatched } = useContext(WatchedContext)
  const watchList = localStorage.getItem(WATCH_LIST_KEY)
  const parsedWatchList = JSON.parse(watchList)

  const alreadyWatched = isEmpty(find(parsedWatchList, matchesProperty('id', data.id)))

  const uniqueData = (list, listItem) => {
    if (!alreadyWatched) {
      return reject(list, listItem)
    }

    return !isEmpty(list) ? uniqWith([...list, listItem], isEqual) : [listItem]
  }

  const handleClick = async () => {
    const result = uniqueData(parsedWatchList, data)
    setWatched(result)
    return localStorage.setItem(WATCH_LIST_KEY, JSON.stringify(result))
  }

  return (
    <div className='card rounded-md max-w-[240px] bg-base-100 shadow-none hover:shadow-lg transition-shadow hover:shadow-neutral-300 duration-300'>
      <figure><img className='max-h-[200px]' src={`/images/${image || 'things.png'}`} alt={image || 'product-image'} /></figure>
      <div className='card-title text-base p-2 font-medium'>{name}</div>
      <div className='card-title p-2'>${price}{(centsLength > 0 && centsLength < 2) && '0'}</div>
      <div className='card-body text-sm p-2'>{description}</div>
      <div className='card-actions p-2 gap-x-3 justify-between items-center flex-nowrap'>
        <div className='flex flex-row items-center gap-x-1'>
          <Rating ratingValue={checkedRate} id={id} />
          <div className='text-sm'>{rate}</div>
        </div>
        <button type='button' className={`btn btn-sm rounded px-4 btn-outline btn-primary capitalize border-2 border-primary border-opacity-40 min-w-[90px] ${!alreadyWatched ? 'btn-active' : ''}`} onClick={handleClick}>
          {!alreadyWatched ? 'Unwatch' : <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            Watch
          </>}
        </button>
      </div>
    </div>
  )
}