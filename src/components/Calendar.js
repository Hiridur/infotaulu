import { isToday, progress, currentTime } from '../util/DateUtil';
import '../styles/calendar.scss';

const CalendarItem = (props) => (
    <div
        className='calendar-item'
        onClick={() => props.setSelected(props.meeting)}
        style={{height: (props.duration-1)*6.5+2.5+'vh'}}
    >
        <div className='calendar-item-title'>{props.meeting?.subject}</div>
        <div className='calendar-item-organizer'>{props.meeting?.organizer}</div>
    </div>
)
const findNextMeeting = (meetings, hours, minutes) => (
    meetings?.find(
    (meeting) => {
        const startTime = new Date(meeting.startTime);

        return (
            startTime.getHours() === hours &&
            startTime.getMinutes() >= minutes &&
            startTime.getMinutes() < minutes-(-30)
        )
    })
)
const trackerPosition = () => {
    let beginDate = new Date(currentTime)
    let endDate = new Date(currentTime)
    beginDate.setHours(7,0,0,0);
    endDate.setHours(18,30,0,0);

    const percentile = progress(beginDate,endDate, currentTime);
    return percentile*23*6.25+'vh'
}

const meetingDuration = (meeting) => {
    if (!meeting) return 1
    const startTime = new Date(meeting.startTime);
    const endTime = new Date(meeting.endTime);
    return (endTime-startTime)/(1000*60*30); // meeting duration in half hours
}

const Calendar = (props) => {
    const {meetings, setSelected} = props;

    const todaysMeetings = meetings?.filter((meeting) =>
        (isToday(meeting.startTime))
    )

    return <div className='reservation-calendar'>
        <table><tbody>{
            Array.apply(null, {length: 23}).map((_, i)=>{
                const hours = Math.floor(i/2+7);
                const minutes = (i%2?'30':'00');
                const currentMeeting = findNextMeeting(
                    todaysMeetings,
                    hours,
                    minutes
                )
                const duration = meetingDuration(currentMeeting);

                return <tr className='calendar-row' key={i + 'c'}>
                    <td className='time-column'>
                        {hours + ':' + minutes}
                    </td>
                    {currentMeeting
                        ? <td
                            className='event-column'
                            rowSpan={duration}
                        >
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
        }</tbody></table>
        {
            <div
                className='calendar-tracker'
                style={{top: trackerPosition()}}
            >
                <div className='calendar-tracker-ball'/>
            </div>
        }
    </div>
}

export default Calendar;