import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId} = useParams()
  return (
    <div className='m-5 p-4 bg-grey-800 color-ehite'>UserId: {userId}</div>
  )
}

export default User