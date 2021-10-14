import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import './Style.css';
import Moon from 'components/Moon/Moon';

function App() {
  const [date, setDate] = useState(new Date());
  
  return (
    <div className='NightMoonCalendar'>
      <h1 className='h1-Heading'>Night Moon Calendar</h1>
      <div className='calendar-container'>
        <Calendar 
          onChange={setDate} value={date}  > 
            <Moon></Moon>
        </Calendar>
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;