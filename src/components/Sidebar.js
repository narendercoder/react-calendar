import React from 'react'
import CreateEventButton from './CreateEventButton'
import Labels from './Labels'

function Sidebar() {
  return (
    <div className='me-3 border p-3 w-25'>
      <CreateEventButton/>
      <Labels/>
    </div>
  )
}

export default Sidebar