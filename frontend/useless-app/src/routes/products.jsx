import Sidebar from "../components/Sidebar";
import useSWR from 'swr'
import { fetcher } from '../services/fetcher.js'
import { Loader } from "../components/Loader";
import { ErrorResponse } from "../components/ErrorResponse";
import ProductCard from "../components/Card";

const ProductsLayout = ({ children }) => (
  <>
    <div className='flex'>
      <Sidebar />
      <div className='flex w-full ml-52 min-h-[600px] py-4 px-2'>
        {children}
      </div>
    </div>
  </>
)

export default function Products() {

  const { data: products, error, isLoading } = useSWR('/products', fetcher )
  if (isLoading) return <ProductsLayout><Loader /></ProductsLayout>
  if (error) return <ProductsLayout><ErrorResponse error={error?.message} /></ProductsLayout>

  console.log('products', products)
  return (
    <ProductsLayout>
      <div className='grid grid-cols-4 gap-2 px-2'>
        {products?.map(product => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </ProductsLayout>
  )

}