import { useState } from 'react'
import { toLongDateString, toTimeString } from '../util/DateUtil'
import '../styles/reservation.scss'

var classNames = require('classnames')

const ReservationTextBlock = (props) => {
    const {icon, text, onClick, description, showParticipants} = props;

    let iconClass = classNames({
        'icon': true,
        'time-icon': icon == 'time',
        'person-icon': icon == 'person',
        'description-icon': icon == 'description'
    })
    return (
        <div className='reservation-text-block' onClick={onClick}>
            <div className={iconClass}/>
            {text&&<div className='reservation-text'>{text}</div>}
            {description&&<div className='reservation-description'>{description}</div>}
            {showParticipants&&<div className='reservation-participants-shevron'/>}
        </div>
    )
}

const ParticipantsBlock = (props) => {
    const { participants, showParticipants } = props;

    return showParticipants
        && participants
        && participants.map(participant =>
            <ReservationTextBlock
                text={participant.name}
                title={participant.title}
            />
        )

}

const Reservation = ((props) => {
    const {
        subject,
        startTime, endTime,
        description,
        participants
    } = props.meeting;

    const [showParticipants, setShowParticipants] = useState(false)
    const toggleParticipants = () => (
        setShowParticipants(!showParticipants))
        //console.log('set partics',showParticipants));

    const date = [
        toTimeString(startTime),
        toTimeString(endTime)
    ].join(' TO ')

    return <div className='reservation'>
        <div className='reservation-text-block reserve-back-button' onClick={props.goBack}>
            <div className='icon back-icon'>
            </div>
            <div className='reservation-title'>{subject}</div>
        </div>
        <ReservationTextBlock
            text={toLongDateString(startTime).toUpperCase()}
            icon='time'
        />
        <ReservationTextBlock
            text={date}
            icon='time'
        />
        <ReservationTextBlock
            text='PARTICIPANTS'
            icon='person'
            onClick={toggleParticipants}
            showParticipants={showParticipants}
        />
        <ParticipantsBlock
            participants={participants}
            showParticipants={showParticipants}
        />
        <ReservationTextBlock
            text='DESCRIPTION'
            icon='description'
        />
        <ReservationTextBlock
            description={description}
            small
        />
    </div>
})

export default Reservation;