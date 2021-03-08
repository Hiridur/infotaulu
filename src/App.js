import logo from './logo.svg';
import axios from 'axios'
import Left from './components/Left';
import Right from './components/Right';
import Data from './data/meetings.json';
import './styles/app.css';
import { createContext, useEffect, useState } from 'react';
import { makeAutoObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import store from './util/MobxStore';

const SaveData = () => {
    const data = axios.get('http://localhost:3001/meetings').then(response => {
        const meetings = response.data;
        console.log('fetched',meetings)
        //saveData(meetings)
        //data = meetings
        return response.data;
    })
    console.log('fetched2',data);
    return data;
    //return makeAutoObservable({data})
}
export const MeetingContext = createContext(['a']);
// //function saveData(data) {
//   //return makeAutoObservable({data})
// function saveData() {

//   const values = useEffect(() => {
//     axios.get('http://localhost:3001/meetings').then(response => {
//         const meetings = response.data;
//         console.log('meetings',meetings)
//         //saveData(meetings)
//     })
//   }, [])
//   return values
// }
//export const context = MeetingContext;
const meetingStore = store;
function App() {

    const [meetings, setMeetings] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/meetings').then(response => {
            setMeetings(response.data)
        })
    }, [])
    const response = SaveData()
    console.log('response',response);
    
    store.setMeetingList(SaveData);
    //store.setMeetingList(useEffect(SaveData));
    console.log('saved',store);
    

    return (
        <MeetingContext.Provider value={meetings}>
        <div className="main">
            <Left/>
            <Right/>
        </div>
        </MeetingContext.Provider>
    );
}

//export const store = SaveData;
export default App;
