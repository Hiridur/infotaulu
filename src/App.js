import { useEffect, useState } from 'react';
import axios from 'axios'
import Left from './components/Left';
import CalendarContainer from './components/CalendarContainer';
import './styles/app.css';

/* const SaveData = () => {
    const data = axios.get('http://localhost:3001/meetings').then(response => {
        const meetings = response.data;
        return response.data;
    })
    return data;
} */
//export const MeetingContext = createContext([]);
//const meetingStore = store;
function App() {

    const [meetings, setMeetings] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/meetings').then(response => {
            const fetchedMeetings = response.data.map(meeting =>
                ({
                    subject: meeting['Subject'],
                    organizer: meeting['Organizer'],
                    startTime: meeting['StartTime'],
                    endTime: meeting['EndTime'],
                    description: meeting['Description'],
                    participants: meeting['Participants']?.map(
                        participant => ({
                            name: participant['Name'],
                            title: participant['Title']
                        })
                    )
                })
            )
            console.log('fetched', fetchedMeetings);

            setMeetings(fetchedMeetings)
        })
    }, [])
    // Assuming the list only has ongoing and upcoming
    // meetings in ascending order by starting time

    //const response = SaveData()
    //console.log('response',response);

    //store.setMeetingList(SaveData);
    //console.log('saved',store);

    return (
        //<MeetingContext.Provider value={meetings}>
        <div className="main">
            <Left meetings={meetings}/>
            <CalendarContainer meetings={meetings}/>
        </div>
        //</MeetingContext.Provider>
    );
}

//export const store = SaveData;
export default App;
