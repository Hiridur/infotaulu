import '../styles/reservation.scss'
import timeIcon from '../icons/time.png'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { MeetingContext } from '../App'
import store from '../util/MobxStore';

var classNames = require('classnames')
const meetingStore = store;

const ReservationTextBlock = observer((props) => {
    const {icon, text} = props;
    
    let iconClass = classNames({
        'icon': true,
        'time-icon': icon == 'time',
        'person-icon': icon == 'person',
        'description-icon': icon == 'description'
    })
    //props.participants.map
    return (
        <div className='reservation-text-block'>
            <div className={iconClass}/>
            <div className='reservation-text'>{text}</div>
            {props.participants
                ? <div
                    onClick={props.toggleParticipants}
                    className={classNames({
                        'participants-icon': true,
                        'participants-open':props.participantsOpen
                    })}
                />
                : <></>
            }
        </div>
    )
})

const Reservation = ((props) => {

    const [participantsOpen, toggleParticipants] = useState(false)
    const {Subject, Organizer, StartTime, EndTime, Participants } = props;
    var date = Date(StartTime);
    console.log('date', date);
    

    return <div className='reservation'>
        <div className='reservation-text-block reserve-back-button' onClick={props.goBack}>
            <div className='icon back-icon'>
            </div>
            <div className='reservation-text reservation-title'>{props.title||'abc work'}</div>
        </div>
        <ReservationTextBlock
            text={date}
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
            participantsOpen={participantsOpen}
            toggleParticipants={toggleParticipants}
        />
        <ReservationTextBlock
            text='tapaaminen'
            icon='description'
        />
    </div>
})

export default Reservation;