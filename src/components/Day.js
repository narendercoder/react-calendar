import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";

function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected, 
    setShowEventModel, 
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(()=>{
       const events = filteredEvents.filter(evt => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"));
       setDayEvents(events)
  }, [filteredEvents, day]);


  function getCurrentDayClass(){
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-primary text-white rounded-circle w-7' : ''
  }
  return (
    <div className="border border-gray-200 d-flex flex-column">
      <header className=" d-flex flex-column align-items-center">
        {rowIdx === 0 && (
          <p className=" text-sm mt-1 ">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className= {`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>{day.format("DD")}</p>
      </header>
      <div className="flex-1 cursor-pointer" onClick={()=>{
        setDaySelected(day);
        setShowEventModel(true);
      }}>
        {dayEvents.map((evt,i)=>(
          <div 
          key={i}
          onClick={()=>setSelectedEvent(evt)}
          className={`bg-${evt.label} p-1 me-3 text-white text-sm rounded mb-1 overflow-hidden`}>
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day;
