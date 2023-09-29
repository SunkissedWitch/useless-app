export default function ProductCard ({ data }) {
 const { image, name, price, description, rate } = data
 const [ _dollars, cents] = price.toString().split('.')
 const centsLength = cents.length
 const checkedRate = Math.floor(rate)
 console.log('checkedRate', checkedRate)

  return (
    <div className='card rounded-md max-w-[240px] bg-base-100 border shadow-sm'>
      <figure><img className='max-h-[200px]' src={`public/images/${image || 'things.png'}`} alt={image || 'product-image'}/></figure>
      <div className='card-title text-base p-2 font-medium'>{name}</div>
      <div className='card-title p-2'>${price}{(centsLength > 0 && centsLength < 2) && '0' }</div>
      <div className='card-body text-sm p-2'>{description}</div>
      <div className='card-actions p-2'>
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
        <div className='text-sm'>{rate}</div>
        <button type='button' className='btn btn-sm rounded px-4 btn-outline btn-primary capitalize border-2 border-primary border-opacity-40'>Watch</button>
      </div>
    </div>
  )
}