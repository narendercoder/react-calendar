import React, { useContext, useState } from "react";
import { MdDeleteOutline, MdDragHandle, MdSegment } from "react-icons/md";
import { IoBookmarkOutline, IoClose } from "react-icons/io5";
import GlobalContext from "../context/GlobalContext";
import { BiTimeFive } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
const labelsClasses = ["indigo", "grey", "green", "blue", "red", "purple"];

function Event() {
  const { 
    setShowEventModel, 
    daySelected, 
    dispatchCalEvent, 
    selectedEvent 
  } =useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : "" 
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
    : labelsClasses[0]
    );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModel(false);
  }
  return (
    <div className="event-card h-screen w-full position-fixed left-0 top-0 d-flex justify-content-center align-items-center">
      <form className="event-form bg-light rounded shadow-lg w-25">
        <header className="px-4 py-2 d-flex justify-content-between align-items-center bg-grey-200">
          <span className="icon">
            <MdDragHandle />
          </span>
          <div>
          {selectedEvent && (
            <button onClick={() => {
                dispatchCalEvent({type: "delete", payload: selectedEvent})
                setShowEventModel(false)
                }} className="btn">
            <span className="icon cursor-pointer">
            <MdDeleteOutline />
            </span>
          </button>
          )}
          <button onClick={() => setShowEventModel(false)} className="btn">
          <span className="icon">
          <IoClose />
          </span>
           
          </button>
          </div>
        </header>
        <div className="event-body p-3">
          <div className="d-grid align-items-end gap-3">
            <div></div>
            <input
              type="text"
              title="tiltle"
              placeholder="Add title"
              value={title}
              className="pt-3 border-0 text-secondary text-xl font-semibold pb-2 w-full border-bottom"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="icon">
              <BiTimeFive />
            </span>
            <p className="mb-0">{daySelected.format("dddd, MMMM DD")}</p>
            <span className="icon">
              <MdSegment />
            </span>
            <input
              type="text"
              title="description"
              placeholder="Add Description"
              value={description}
              className="pt-3 border-0 text-secondary pb-2 w-full border-bottom"
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="icon">
              <IoBookmarkOutline />
            </span>
            <div className="d-flex gap-2">
              {labelsClasses.map((lblclass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblclass)}
                  className={`bg-${lblclass} w-6 h-6 rounded-circle d-flex align-items-center justify-content-center cursor-pointer`}
                >
                  {selectedLabel === lblclass && (
                    <span className="icon text-white">
                      <BsCheck />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="d-flex justify-content-end border-top p-3 mt-3">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary rounded px-4 py-2 text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

export default Event;
