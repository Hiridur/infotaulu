import { observer } from 'mobx-react-lite';
import '../styles/upcoming.scss'

const NextItem = (props) => (
    <div className='upcoming-item'>
        <div className='upcoming-item-time'>{props.time}</div>
        <div className='upcoming-item-title'>{props.title}</div>
        <div className='upcoming-item-author'>{props.author}</div>
    </div>
)

const Upcoming = (() => (
    <div className='upcoming-wrapper'>
        <NextItem 
            time = '1:00'
            title = 'Mehuhetki'
            author = 'Author'
        />
        <NextItem 
            time = '1:00'
            title = 'Mehuhetki'
            author = 'Author'
        />
    </div>
))

export default Upcoming;