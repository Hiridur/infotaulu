import { useState } from 'react';
import Reservation from './Reservation';
import Calendar from './Calendar';
import '../styles/calendarContainer.scss';

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