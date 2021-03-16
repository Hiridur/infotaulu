import { useEffect, useState } from 'react';
import axios from 'axios'
import CurrentNextContainer from './components/CurrentNextContainer';
import CalendarContainer from './components/CalendarContainer';
import './styles/app.css';

function App() {

    const [meetings, setMeetings] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/meetings').then(response => {
            const fetchedMeetings = response.data.map(meeting =>
                ({
                    id: Math.random(),
                    subject: meeting['Subject'],
                    organizer: meeting['Organizer'],
                    startTime: meeting['StartTime'],
                    endTime: meeting['EndTime'],
                    description: meeting['Description'],
                    participants: meeting['Participants']?.map(
                        participant => ({
                            id: Math.random(),
                            name: participant['Name'],
                            title: participant['Title']
                        })
                    )
                })
            )
            setMeetings(fetchedMeetings)
        })
    }, [])

    // Assuming the meetings are in ascending order by starting time

    return (
        <div className="main">
            <CurrentNextContainer meetings={meetings}/>
            <CalendarContainer meetings={meetings}/>
        </div>
    );
}

export default App;
