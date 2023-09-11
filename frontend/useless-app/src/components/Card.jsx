export default function ProductCard () {
  return (
    <div className='card bg-slate-200 border'>
      <div className='card-title'>
        Product Card
      </div>
      <div className='card-body'>description</div>
      <div className='card-actions'>
        <button type='button' className='btn btn-primary'>Button</button>
      </div>
    </div>
  )
}