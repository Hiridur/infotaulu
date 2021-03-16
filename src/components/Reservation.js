import { useState } from 'react'
import { toLongDateString, toTimeString } from '../util/DateUtil'
import '../styles/reservation.scss'

var classNames = require('classnames')

const ReservationTextBlock = (props) => {
    const {icon, text, onClick, customClass} = props;

    let iconClass = classNames(
        'icon',
        {
            'time-icon': icon === 'time',
            'person-icon': icon === 'person',
            'description-icon': icon === 'description'
        }
    )
    const blockClass = ['reservation-text-block', customClass].join(' ');
    return (
        <div className={blockClass} onClick={onClick}>
            <div className={iconClass}/>
            {text&&<div className='reservation-text'>{text}</div>}
            {props.children}
        </div>
    )
}

const ParticipantsBlock = (props) => {
    const { participants, showParticipants } = props;

    if (showParticipants && participants)
        return <div className='participants-container'>
            {participants.map(participant =>
                <div className='participant-row' key={participant.id}>
                    <div className='icon participant-icon'></div>
                    <div className='participant-name'>{participant.name}</div>
                    <div className='participant-title'>{participant.title}</div>
                </div>
            )}
        </div>
    return <></>

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

    const date = [
        toTimeString(startTime),
        toTimeString(endTime)
    ].join(' TO ')

    return <div className='reservation'>
        <div
            className='reservation-text-block reserve-back-button'
            onClick={props.goBack}
        >
            <div className='icon back-icon'/>
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
            customClass='reservation-participants'
        >
            {participants && <div className={classNames(
                'icon reservation-participants-icon',
                {
                    'reservation-participants-open': showParticipants,
                    'reservation-participants-close': !showParticipants
                }
            )}/>}
        </ReservationTextBlock>
        <ParticipantsBlock
            participants={participants}
            showParticipants={showParticipants}
        />
        <ReservationTextBlock
            text='DESCRIPTION'
            icon='description'
        />
        <ReservationTextBlock>
            <div className='reservation-description'>{description}</div>
        </ReservationTextBlock>
    </div>
})

export default Reservation;