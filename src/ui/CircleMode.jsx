import React from 'react'

export default function CircleMode({isDemo, setIsDemo}) {
  return (
    <div
        onClick={() => setIsDemo(!isDemo)} 
        className='circle-mode'>
        <span>{isDemo ? 'Show Challenge': 'Show Demo'}</span>
    </div>
  )
}
