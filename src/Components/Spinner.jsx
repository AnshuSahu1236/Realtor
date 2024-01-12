import React from 'react'
import spinner from '../assets/Spinner-3.gif'

const Spinner = () => {
  return (
    <div className='bg-opacity-0 flex items-center justify-center top-0 bottom-0 left-0 right-0 z-50 fixed'>
        <img src={spinner} alt="" />
    </div>
  )
}

export default Spinner
