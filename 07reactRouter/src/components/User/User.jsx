import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams();
  return (
    <div className='bg-slate-600 text-center text-3xl m-4 p-4 text-white'>User: {id}</div>
  )
}

export default User