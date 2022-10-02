import React from 'react';
import Day from './Day';

function Month({month}) {
  return (
    <div className='flex-1 row row-cols-7'>
        {month.map((row,i)=>(
            <React.Fragment key={i}>
              {
                row.map((day,ind)=>(
                    <Day day={day} key={ind} rowIdx={i} />
                ))
              }
            </React.Fragment>
        ))}
    </div>
  )
}

export default Month