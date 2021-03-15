import { useState } from 'react';
import Reservation from './Reservation';
import '../styles/calendar.scss';

const CalendarItem = (props) => (
    <div
        className='calendar-item'
        onClick={() => props.setSelected(props.meeting)}
        style={{height: (props.duration-1)*6+2+'vh'}}
    >
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
const meetingDuration = (meeting) => {
    if (!meeting) return 1
    const startTime = new Date(meeting.startTime);
    const endTime = new Date(meeting.endTime);
    return (endTime-startTime)/(1000*60*30); // meeting duration in half hours
}

const Calendar = (props) => {
    const {meetings, setSelected} = props;

    const todaysMeetings = meetings?.filter((meeting) => (isCurrentDay(meeting)))
    console.log('isCurrentDay list',todaysMeetings);
    let cur = false;

    return <table className='reservation-calendar'>
        <tbody> {
            Array.apply(null, {length: 23}).map((_, i)=>{
                const hours = Math.floor(i/2+7);
                const minutes = (i%2?'30':'00');
                const currentMeeting = todaysMeetings?.find(
                    (meeting) => {
                        const startTime = new Date(meeting.startTime);
                        const endTime = new Date(meeting.endTime);
                        console.log('klo event',startTime.getHours(),
                            hours, startTime.getMinutes(), minutes, minutes -(-30),
                            startTime, endTime, (endTime-startTime)/(1000*60*30));

                        return (
                            startTime.getHours() === hours &&
                            startTime.getMinutes() >= minutes &&
                            startTime.getMinutes() < minutes-(-30)
                        )
                    }
                )
                console.log('found',currentMeeting);
                cur = !!currentMeeting;

                const duration = meetingDuration(currentMeeting);

                return <tr className='calendar-row'>
                    <td className='time-column'>{hours + ':' + minutes}</td>
                    {currentMeeting
                        ? <td className='event-column' rowSpan={duration}>
                            <CalendarItem
                                setSelected={
                                    (meeting) => setSelected(meeting)
                                }
                                meeting={currentMeeting}
                                duration={duration}
                            />
                        </td>
                        : <td className='event-column empty'></td>
                    }
                </tr>
            })
        }</tbody>
    </table>
}

export default Calendar;