import Sidebar from "../components/Sidebar";
import useSWR from 'swr'
import { fetcher } from '../services/fetcher.js'
import { Loader } from "../components/Loader";
import { ErrorResponse } from "../components/ErrorResponse";
import ProductCard from "../components/Card";
import { useLocation } from "react-router-dom";
import { NoData } from "../components/NoData";
import { SortBy } from "../components/SortBy";

const ProductsLayout = ({ children }) => (
  <>
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col gap-4 w-full ml-52 min-h-[600px] py-4 px-2'>
        {children}
      </div>
    </div>
  </>
)

export default function Products() {
  const { search } = useLocation()
  const params = { orderBy: 'desc' }
  const { data: products, error, isLoading } = useSWR(`/products${search}`, (url) => fetcher(url, params))

  if (isLoading) return <ProductsLayout><Loader /></ProductsLayout>
  if (error) return <ProductsLayout><ErrorResponse error={error?.message} /></ProductsLayout>
  if (!products.length) return <ProductsLayout><NoData /></ProductsLayout>

  // ToDo - Sort data by: The cheapest, the most expensive, top-rated.

  return (
    <ProductsLayout>
      <SortBy />
      <div  className='flex items-start'>
        <div className='mx-auto gap-3 px-2 w-full max-w-5xl flex flex-wrap justify-start'>
          {products?.map(product => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </ProductsLayout>
  )

}