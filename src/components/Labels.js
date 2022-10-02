import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

function Labels() {
    const {labels, updateLabel} = useContext(GlobalContext);
  return (
    < >
      <p className='text-grey mt-5 font-bold'>Label</p>
      {labels.map(({label: lbl, checked},idx)=>(
        <label key={idx} className="d-flex align-items-center mt-3 d-block">
            <input 
            type="checkbox" 
            checked={checked} 
            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded cursor-pointer`}
            onChange={() =>
              updateLabel({ label: lbl, checked: !checked })
            }
            />
            <span className='ms-2  text-capitalize'>{lbl}</span>
        </label>
      ))}
    </>
  )
}

export default Labels