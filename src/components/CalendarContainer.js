import { useState } from 'react';
import Reservation from './Reservation';
import '../styles/calendarContainer.scss';
import Calendar from './Calendar';

const isCurrentDay = (meeting) => {
    const date = new Date(meeting?.startTime);
    const currentDay = new Date('2018-03-03T10:30:00');
    console.log('dates',date,currentDay);


    return date.getFullYear() === currentDay.getFullYear() &&
        date.getMonth() === currentDay.getMonth() &&
        date.getDate() === currentDay.getDate()
}

const CalendarContainer = ({...rest}) => {
    const [selected, setSelected] = useState();

    if (selected) return (
        <div className='calendar-container'>
            <Reservation meeting={selected} goBack={() => setSelected()}/>
        </div>
    )

    return (
        <div className='calendar-container'>
            <div className='calendar-title'>
                <div className='calendar-title-room'>Conference room</div>
                <div className='calendar-title-today'>Kesä Today</div>
            </div>
            <Calendar {...rest} setSelected={setSelected}/>
        </div>
    )
}

export default CalendarContainer;