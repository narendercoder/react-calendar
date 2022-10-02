import dayjs from "dayjs";
import React, { useContext } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import GlobalContext from "../context/GlobalContext";

function CalenderHeader() {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext);
  function handlePrevMonth(){
    setMonthIndex(monthIndex - 1)
  }
  function handleNextMonth(){
    setMonthIndex(monthIndex + 1)
  }
  function handleReset(){
    setMonthIndex(dayjs().month())
  }
  return (
    <header className="px-4 py-2 d-flex align-items-center">
      <img
        src="https://shotatlife.org/wp-content/uploads/2018/07/google-calendar-icon-png-400x400.png"
        alt=""
        className="me-2 w-12 h-12"
      />
      <h1 className="me-10 mb-0 text-xl text-secondary">Calendar</h1>
      <button className="btn border rounded py-2 px-4 me-3" onClick={handleReset}>Today</button>
      <button className="btn p-0" onClick={handlePrevMonth}>
        <span className="icon  mx-2">
          <BiChevronLeft />
        </span>
      </button>
      <button className="btn p-0" onClick={handleNextMonth}>
        <span className="icon mx-2">
          <BiChevronRight />
        </span>
      </button>
      <h2 className="ms-4 mb-0 text-secondary text-xl font-bold">
      {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}

export default CalenderHeader;
