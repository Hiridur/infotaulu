import '../styles/upcoming.scss'
import { toTimeString } from '../util/DateUtil';

const NextItem = (props) => (
    <div className='upcoming-item'>
        <div className='upcoming-item-time'>{
            toTimeString(props.startTime)
            +' - '+
            toTimeString(props.endTime)}
        </div>
        <div className='upcoming-item-title'>{props.subject}</div>
        <div className='upcoming-item-organizer'>{props.organizer}</div>
    </div>
)

const Upcoming = (props) => (
    <div className='upcoming-wrapper'>
        {props.meetings?.map(meeting => {
            console.log('upcoming', meeting)
            return <NextItem
                startTime = {meeting.startTime}
                endTime = {meeting.endTime}
                subject = {meeting.subject}
                organizer = {meeting.organizer}
            />
        })}
    </div>
)

export default Upcoming;