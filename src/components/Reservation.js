import { useState } from 'react'
import { toLongDateString, toTimeString } from '../util/DateUtil'
import '../styles/reservation.scss'

var classNames = require('classnames')

const ReservationTextBlock = (props) => {
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
}

const Reservation = ((props) => {
    const { subject, organizer, startTime, endTime, participants } = props.meeting;

    const [participantsOpen, toggleParticipants] = useState(false)
    const date = [
        toTimeString(startTime),
        toTimeString(endTime)
    ].join(' TO ')


    return <div className='reservation'>
        <div className='reservation-text-block reserve-back-button' onClick={props.goBack}>
            <div className='icon back-icon'>
            </div>
            <div className='reservation-text reservation-title'>{
                props.title||'abc work'
            }</div>
        </div>
        <ReservationTextBlock
            text={toLongDateString(startTime)}
            icon='time'
        />
        <ReservationTextBlock
            text={date}
            icon='time'
        />
        <ReservationTextBlock
            text='PARTICIPANTS'
            icon='person'
            participants={participants}
            participantsOpen={participantsOpen}
            toggleParticipants={toggleParticipants}
        />
        {participants?.map(participant =>
            <ReservationTextBlock
                text={participant.name}
                title={participant.title}
            />
        )}
        <ReservationTextBlock
            text='tapaaminen'
            icon='description'
        />
    </div>
})

export default Reservation;