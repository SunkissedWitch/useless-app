import { useContext } from 'react'
import ProductCard from '../components/Card'
import { WatchedContext } from './root'

export default function WatchPage () {
  const { watched } = useContext(WatchedContext)

  return (
    <div className='bg-slate-100 px-4 py-5'>
      <div className='mb-6 px-4'><span>Watched products</span> - <b>{watched?.length}</b></div>
      <div className='flex gap-3 flex-wrap'>
        {watched?.map(product => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}