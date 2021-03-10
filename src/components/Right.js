import { useState } from 'react';
import Reservation from './Reservation';
import '../styles/right.scss';

const CalendarItem = (props) => (
    <div className='calendar-item' onClick={() => props.setSelected(props.meeting)}>
        <div className='calendar-item-title'>{props.meeting.subject}</div>
        <div className='calendar-item-organizer'>{props.meeting.organizer}</div>
    </div>
)

const Right = (props) => {
    const [selected, setSelected] = useState();

    if (selected) return (
        <div className='right'>
            <Reservation meeting={selected} goBack={() => setSelected()}/>
        </div>
    )
    else return (
        <div className='right'><p>Text</p>
            {props.meetings?.map((meeting,i)=>(
                <CalendarItem
                    setSelected={(meeting) => setSelected(meeting)}
                    meeting={meeting}
                    key={i}
                />
            ))}
        </div>
    )
}

export default Right;