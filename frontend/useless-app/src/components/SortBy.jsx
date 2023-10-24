import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const SortBy = ({ sortVariants }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [order, setOrder] = useState(sortVariants[0].key)

  const handleChange = (e) => {
    setOrder(e.target.value)
    searchParams.set('sortBy', e.target.value)
    setSearchParams(searchParams)
  }

  return (
    <div className='form-control w-full max-w-xs px-2'>
      <label className='label label-text'>Sort by:</label>
      <select className='select select-bordered' name='selectSortByOrder' onChange={handleChange} defaultValue={order}>
        {sortVariants.map(sort => (
          <option disabled={sort.label === 'The most useless'} key={sort.key} value={sort.key}>{sort.label}</option>
        ))}
      </select>
    </div>
  )
}