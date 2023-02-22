import React, {useState} from 'react'

import axios from 'axios'

import { IGift } from '../../interfaces'
import { title } from 'process'


interface CreateGiftProps {
  onCreate: (gift: IGift) => void
}

export function CreateGift() {  
    
    const [title, setTitle] = useState('')
    const submitHandler = (event:React.FormEvent) => {
        event.preventDefault()
    }    
  
     
  return (
    <form onSubmit = {submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter gift title..."
        onChange ={event => setTitle(event.target.title)}
      />
      <input/>

      

      <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
    </form>
  )
}