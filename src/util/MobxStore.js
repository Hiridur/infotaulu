import { action, observable } from "mobx";

const store = observable({
    meetings: ['abc'],
    setMeetingList: action((meetingList) => store.meetings = meetingList)
})

export default store;