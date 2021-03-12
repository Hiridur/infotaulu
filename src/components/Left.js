import TitleWrapper from './TitleWrapper';
import Upcoming from './Upcoming';
import '../styles/left.scss';

const Left = (props) => {
    const {meetings} = props;
    const current = meetings[0]||{};
    console.log('current', current);


    const upcoming = meetings.slice(1,4);

    return(
        <div className='current-next-wrapper'>
            <div/>
            <TitleWrapper
                meeting={current}
            />
            <Upcoming
                meetings={upcoming}
            />
        </div>
    )
}

export default Left;