import React  from 'react'
import loading from '../Spinner@1x-1.0s-200px-200px.gif'

const Spinner =()=>{
    return (
      <div className='text-center'>
        <img className='my-3' src={loading} alt='loading' />
      </div>
    )
}

export default Spinner
