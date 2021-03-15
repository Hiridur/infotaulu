import { useState } from 'react';
import Reservation from './Reservation';
import '../styles/calendar.scss';

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

const Calendar = (props) => {
    //const [selected, setSelected] = useState();
    const {meetings, setSelected} = props;

    /*if (selected) return (
        <div className='right'>
            <Reservation meeting={selected} goBack={() => setSelected()}/>
        </div>
    )*/
    const todaysMeetings = meetings?.filter((meeting) => (isCurrentDay(meeting)))
    console.log('isCurrentDay list',todaysMeetings);
    let cur = false;

    return <table className='reservation-calendar'>
        <tbody>
            {
                Array.apply(null, {length: 20}).map((_, i)=>{
                    const hours = Math.floor(i/2+7);
                    const minutes = (i%2?'30':'00');
                    const currentMeeting = todaysMeetings?.find(
                        (meeting) => {
                            const date = new Date(meeting.startTime);
                            console.log('klo event',date.getHours(),hours, date.getMinutes(), minutes, minutes -(-30), date);

                            return (
                                date.getHours() === hours &&
                                date.getMinutes() >= minutes &&
                                date.getMinutes() < minutes-(-30)
                            )
                        }
                    )
                    console.log('found',currentMeeting);
                    cur = !!currentMeeting;

                    return <tr>
                        <td className='time-column'>{hours + ':' + minutes}</td>
                        <td className='event-column'>
                            {currentMeeting &&
                            <CalendarItem
                                setSelected={
                                    (meeting) => setSelected(meeting)
                                }
                                meeting={currentMeeting}
                            />}
                        </td>
                    </tr>
                })
            }
        <tr>
            <td>a</td>
            <td rowspan='2' colspan='2'>a</td>
            <td>a</td>
        </tr>
        <tr>
            <td>a</td>
            <td>a</td>
            <td>a</td>
            <td>a</td>
        </tr>
        <tr>
            <td>a</td>
            <td>a</td>
            <td>a</td>
            <td>a</td>
        </tr></tbody>
    </table>
}

export default Calendar;