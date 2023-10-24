export const ErrorResponse = ({ error }) => (
  <div className='text-error w-full flex justify-center items-center'>
    <div className='p-4 bg-red-100 rounded-md border border-error border-opacity-40'>
      {error?.message || 'Oops! There is an error has occured :('}
    </div>
  </div>
)