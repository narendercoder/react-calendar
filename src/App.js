import { useContext, useEffect, useState } from 'react';
import getMonth from './utils';
import './App.css';
import GlobalContext from './context/GlobalContext';
import CalenderHeader from './components/CalenderHeader';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import Event from './components/Event';



function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex, showEventModel} = useContext(GlobalContext);

  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex));
  },[monthIndex])

  return (
    <div className="app">
      {showEventModel && <Event/>}
       <div className='h-screen d-flex flex-column'>
       <CalenderHeader/>
       <div className="d-flex flex-1">
        <Sidebar/>
        <Month month={currentMonth}/>
       </div>
    </div>
    </div>
  );
}

export default App;
