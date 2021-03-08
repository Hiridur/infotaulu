import '../styles/reservation.scss'
import timeIcon from '../icons/time.png'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { MeetingContext } from '../App'
//import { store } from '../App'

var classNames = require('classnames')

const ReservationTextBlock = observer((props) => {
    const contexti = useContext(MeetingContext)
    console.log('konteksti',contexti)
    let blockClass = classNames({
        'icon': true,
        'time-icon': props.icon == 'time',
        'person-icon': props.icon == 'person',
        'description-icon': props.icon == 'description'
    })
    //props.participants.map
    return (
        <div className='reservation-text-block'>
            <div className={blockClass}></div>
            <div className='reservation-text'>{props.text + ' ' + useContext(MeetingContext)}</div>
        </div>
    )
})
const ReservationTextBlockB = (({store}) => {
    console.log('store', store)
     let blockClass = classNames({
         'icon': true,
    //     'time-icon': props.icon == 'time',
    //     'person-icon': props.icon == 'person',
    //     'description-icon': props.icon == 'description'
     })
    //props.participants.map
    //console.log(props.meetings)
    return (
        <div className='reservation-text-block'>
            <div className={blockClass}></div>
            {//<div className='reservation-text'>{props.text}</div>
            }
        </div>
    )
})

const Reservation = ((props) => (
    <div className='reservation'>
        <div className='reservation-text-block back-button'>
            <div className='icon back-icon'>{//<div>{'<'}</div>
            }</div>
            <div className='reservation-text'>{props.title||'abc work'}</div>
        </div>
        <ReservationTextBlock
            text='tapaaminen'
            icon='time'
            //store={useContext(context)}
        />
        <ReservationTextBlock
            text='tapaaminen'
            icon='time'
        />
        <ReservationTextBlock
            text='tapaaminen'
            icon='person'
            participants={{a:'a'}}
        />
        <ReservationTextBlock
            text='tapaaminen'
            icon='description'
        />
    </div>
))

export default Reservation;