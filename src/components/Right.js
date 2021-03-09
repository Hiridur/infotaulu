import { useState, useContext } from 'react';
import { MeetingContext } from '../App'
import '../styles/right.scss';
import Reservation from './Reservation';

const CalendarItem = (props) => (
    <div className='calendar-item' onClick={() => props.setSelected(props.meeting)}>
        <div className='calendar-item-title'>{props.meeting.Subject}</div>
        <div className='calendar-item-author'>{props.meeting.Organizer}</div>
    </div>
)

const Right = () => {
    const meetingList = useContext(MeetingContext);
    const [selected, setSelected] = useState(meetingList[0]);
    console.log('right',selected, meetingList[0],meetingList);
    
    if (selected) return (
        <div className='right'>
            <Reservation title='talvi' goBack={() => setSelected()}/>
        </div>
    )
    else return (
        <div className='right'><p>Text</p>
            {meetingList.map((meeting)=>(<CalendarItem setSelected={(meeting)=> setSelected(meeting)} meeting={meeting}/>))}
        </div>
    )
}

export default Right;