import logo from './logo.svg';
import axios from 'axios'
import Left from './components/Left';
import Right from './components/Right';
import Data from './data/meetings.json';
import './styles/app.css';
import { createContext, useEffect } from 'react';
import { makeAutoObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';

const SaveData = () => {
    var data = 0;
    axios.get('http://localhost:3001/meetings').then(response => {
        const meetings = response.data;
        console.log('meetings',meetings)
        //saveData(meetings)
        data = meetings
    })
    return makeAutoObservable({data})
}
//const daata = ['a'];
function Fetch() {
  var data;
  useEffect(axios.get('http://localhost:3001/meetings').then(response => {
      const meetings = response.data;
      console.log('meetings fetched',meetings)
      //saveData(meetings)
      data = meetings
  }),[])
  return data
}
const daata = () => {
  var data;
  axios.get('http://localhost:3001/meetings').then(response => {
      const meetings = response.data;
      console.log('meetings fetched',meetings)
      //saveData(meetings)
      data = meetings
  })
  return observable(data)
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

function App(props) {
    console.log('props',props)
    //useEffect(SaveData)
    // //const data = Data.map(a => (a))
    // var data;
    // useEffect( () =>
    //     axios.get('http://localhost:3001/meetings').then(response => {
    //         const meetings = response.data;
    //         console.log('meetings',meetings)
    //         //saveData(meetings)
    //         data = meetings
    //     })
    //     )
    // //SaveData()

    return (
        <div className="main">
            <Left/>
            <Right/>
        </div>
    );
}

//export const store = SaveData;
export default App;
