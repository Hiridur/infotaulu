import TitleWrapper from './TitleWrapper';
import Upcoming from './Upcoming';
import '../styles/currentNextContainer.scss';
import { currentTime, progress } from '../util/DateUtil';

const CurrentNextContainer = (props) => {
    const {meetings} = props;

    const upcoming = meetings.filter((meeting) => {
        return (new Date(meeting.startTime)) >= currentTime
    })
    let current = meetings.find((meeting) =>{
        const start = new Date(meeting.startTime);
        const end = new Date(meeting.endTime);
        return start <=currentTime &&
        currentTime <= end
    })

    const nextMeetings = upcoming?.slice(0,3);
    const percentile = progress(
        current?.startTime,
        current?.endTime,
        true
    )/(1/100) +'%';

    return(
        <div className='current-next-wrapper'>
            <div/>
            <TitleWrapper
                meeting={current}
                progress={percentile}
            />
            <Upcoming
                meetings={nextMeetings}
            />
        </div>
    )
}

export default CurrentNextContainer;