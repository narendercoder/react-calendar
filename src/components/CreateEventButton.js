import React, { useContext } from 'react';
import {FaSortDown} from "react-icons/fa"
import GlobalContext from '../context/GlobalContext';

function CreateEventButton() {
  const {setShowEventModel} = useContext(GlobalContext)
  return (
    <button onClick={()=>setShowEventModel(true)} className='btn border p-2 rounded d-flex align-items-center justify-content-center shadow-sm hover:shadow'>
    <img src="./assets/plus-sign-png.png" alt="" className='w-7 h-7'/>
    <span className='ps-3 pe-3'>Create</span>
    <span className='mb-2 p-0' ><FaSortDown/></span>
    </button>
  )
}

export default CreateEventButton;