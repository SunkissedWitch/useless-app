import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

export const Search = () => {
  const { handleSubmit, resetField, register } = useForm({
    defaultValues: {
      searchString: ''
    }
  })
  const [searchParams, setSearchParams] = useSearchParams()

  const onSubmit = ({ searchString }) => {
    searchParams.set('searchString', searchString)
    setSearchParams(searchParams)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-row relative items-center'>
      <input
        type='text'
        placeholder='Search'
        className='input input-secondary input-sm rounded-full bg-slate-200 pr-12 border-none w-24 md:w-auto md:min-w-[450px]'
        {...register('searchString')}
      />
      <input type='submit' className='hidden' />
      <button
        className='absolute right-0 text-primary fill-current'
        onClick={() => resetField('searchString')}
      >
        <svg className='w-9 h-9 mx-1' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'><path d='M557.2 512l136.4-136.4c12.4-12.4 12.4-32.8 0-45.2-12.4-12.4-32.8-12.4-45.2 0L512 466.8l-136.4-136.4c-12.4-12.4-32.8-12.4-45.2 0-6.2 6.2-9.4 14.4-9.4 22.6 0 8.2 3.2 16.4 9.4 22.6l136.4 136.4-136.4 136.4c-6.2 6.2-9.4 14.4-9.4 22.6 0 8.2 3.2 16.4 9.4 22.6 12.4 12.4 32.8 12.4 45.2 0l136.4-136.4 136.4 136.4c12.4 12.4 32.8 12.4 45.2 0 12.4-12.4 12.4-32.8 0-45.2L557.2 512z' /></svg>
      </button>
    </form>
  )
}