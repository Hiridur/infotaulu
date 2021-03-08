import { action, observable } from "mobx";

const store = observable({
    meetings: ['abc'],
    fetchMeetings: action((meetingList) => store.meetings = meetingList)
})

export default store;