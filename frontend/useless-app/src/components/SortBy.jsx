import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

export const SortBy = () => {
  const { handleSubmit, resetField, watch, register } = useForm({
    defaultValues: {
      sortBy: 'The most useless'
    }
  })
  const [_searchParams, setSearchParams] = useSearchParams()

  const onSubmit = (data) => {
    console.log('SortBy data', data)
    setSearchParams((prev) => ({ ...prev, data }))
  }
  console.log('watch', watch('sortBy'))
// ToDo - Sort data by: The cheapest, the most expensive, top-rated.
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs px-2">
      {/* <select
        placeholder='SortBy'
        className='input input-secondary input-sm rounded-full bg-slate-200 pr-12 border-none w-24 md:w-auto md:min-w-[450px]'
        {...register('SortByString')}
      /> */}
        <label className="label">
          <span className="label-text">Sort by: </span>
        </label>
        <select className="select select-bordered" {...register('sortBy')}>
          <option disabled>The most useless</option>
          <option>The cheapest</option>
          <option>The most expensive</option>
          <option>Top-rated</option>
        </select>
    </form>
  )
}