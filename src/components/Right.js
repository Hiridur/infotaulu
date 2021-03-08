import '../styles/right.scss';
import Reservation from './Reservation';

const CalendarItem = (props) => (
    <div className='calendar-item'>
        <div className='calendar-item-title'>{props.title}</div>
        <div className='calendar-item-author'>{props.author}</div>
    </div>
)

const Right = (props) => {
    const a = true
    if (a) return (
        <div className='right'>
            <Reservation/>
        </div>
    )
    else return (
        <div className='right'><p>Text</p>
            <CalendarItem title='tapahtumannimi' author='Herra Hakkarainen'/>
        </div>
    )
}

export default Right;