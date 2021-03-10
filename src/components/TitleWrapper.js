import '../styles/titleWrapper.scss';
import { toTimeString } from '../util/DateUtil';

const TitleWrapper = (props) => (
    <div className='title-wrapper'>
        <div className='ongoing-text'>Current meeting</div>
        <div className='ongoing-title'>{props.title}</div>
        <div className='ongoing-time'>
            <span>{toTimeString(props.startTime)}</span>
            <span>--</span>

            <span>{toTimeString(props.endTime)}</span>
        </div>
        <div className='ongoing-organizer'>{props.organizer}</div>

    </div>
)

export default TitleWrapper;