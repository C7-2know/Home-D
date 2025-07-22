import React from 'react'

function Profile({props}) {
  return (
    <div className='flex gap-4 items-center'>
        <img  className='w-12 h-12 rounded-full' src={props.ppicture} alt='profile picture'/>
        <div className='flex-col text-sm'>
            <p className='text-lg font-bold'>{props.name}</p>
            <p className='text-gray-500'>{props.time}</p>
        </div>
    </div>
  )
}

export default Profile