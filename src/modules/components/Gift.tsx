import React, {useState} from 'react'
import { ListGift } from '../../interfaces'


interface GiftProps {
  event: ListGift
}

export function Gift({ event }: GiftProps) {
  const [details, setDetails] = useState(false)

  const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  return (
    <div
      className="border py-2 px-4 rounded flex flex-col items-center mb-2"
    >
      <img src={event.link} width="200" height="200" alt={event.title} />
      <p>{ event.title }</p>
      
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails(prev => !prev)}
      >
        { details ? 'Hide Details' : 'Show Details' }
      </button>

      {details && <div>
        <p>{ event.description }</p>
        
      </div>}

    </div>
  )
}