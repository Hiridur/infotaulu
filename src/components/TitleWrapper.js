import '../styles/titleWrapper.scss';
import { toTimeString } from '../util/DateUtil';

const TitleWrapper = (props) => (
    <div className='title-wrapper'>
        <div className='ongoing-text'>Current meeting</div>
        <div className='ongoing-title'>{props.meeting.title}</div>
        {props.meeting.startTime?(
            <div className='ongoing-time'>
                <span>{toTimeString(props.meeting.startTime)}</span>
                <span>--</span>

                <span>{toTimeString(props.meeting.endTime)}</span>
            </div>
        ):<></>}
        <div className='ongoing-organizer'>{props.meeting.organizer}</div>

    </div>
)

export default TitleWrapper;