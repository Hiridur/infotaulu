import TitleWrapper from './TitleWrapper';
import Upcoming from './Upcoming';
import '../styles/left.scss';

const Left = (props) => {
    const {meetings} = props;
    const current = meetings[0]||{};

    const upcoming = meetings.slice(1,4);

    return(
        <div className='current-next-wrapper'>
            <div/>
            <TitleWrapper
                title={current.subject}
                startTime={current.startTime}
                endTime={current.endTime}
                organizer={current.organizer}
            />
            <Upcoming
                meetings={upcoming}
            />
        </div>
    )
}

export default Left;