import { useState } from 'react';
import Reservation from './Reservation';
import '../styles/right.scss';
import Calendar from './Calendar';

const CalendarItem = (props) => (
    <div className='calendar-item' onClick={() => props.setSelected(props.meeting)}>
        <div className='calendar-item-title'>{props.meeting?.subject}</div>
        <div className='calendar-item-organizer'>{props.meeting?.organizer}</div>
    </div>
)

const isCurrentDay = (meeting) => {
    const date = new Date(meeting?.startTime);
    const currentDay = new Date('2018-03-03T10:30:00');
    console.log('dates',date,currentDay);


    return date.getFullYear() === currentDay.getFullYear() &&
        date.getMonth() === currentDay.getMonth() &&
        date.getDate() === currentDay.getDate()
}

const Right = (props) => {
    const [selected, setSelected] = useState();
    const {meetings} = props;

    if (selected) return (
        <div className='right'>
            <Reservation meeting={selected} goBack={() => setSelected()}/>
        </div>
    )
    const todaysMeetings = meetings?.filter((meeting) => (isCurrentDay(meeting)))

    return (
        <div className='right'>
            <p>Text</p>
            <Calendar meetings={meetings} setSelected={setSelected}/>
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