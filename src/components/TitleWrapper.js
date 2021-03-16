import '../styles/titleWrapper.scss';
import { toTimeString } from '../util/DateUtil';

const TitleWrapper = (props) => {
    const {
        subject,
        startTime,
        endTime,
        organizer
    } = props.meeting || {};


    return <div className='title-wrapper'>
        <div className='ongoing-text'>Current meeting</div>
        <div className='ongoing-separator'></div>
        <div className='ongoing-title'>{subject}</div>
        {startTime && endTime &&
            <div className='ongoing-time'>
                <span>{toTimeString(startTime)}</span>
                <div className='ongoing-progress'>
                    <div
                        className='ongoing-progress-percentile'
                        style={{width: props.progress}}
                    />
                </div>
                <span>{toTimeString(endTime)}</span>
            </div>
        }
        <div className='ongoing-organizer'>{organizer}</div>
    </div>
}

export default TitleWrapper;