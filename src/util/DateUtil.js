

export const toTimeString = (date) => (
    (new Date(date)).toLocaleTimeString(
        'fi',
        {hour:'numeric', minute:'numeric'}
    )
)

export const toDateString = (date) => (
    (new Date(date)).toLocaleDateString(
        'fi',
        {day:'numeric', month:'numeric', year:'numeric' }
    )
)
export const toWeekdayString = (date) => (
    (new Date(date)).toLocaleString('en',{weekday:'long'})
)

export const toLongDateString = (date) => (
    [
        toWeekdayString(new Date(date)),
        toDateString(new Date(date))
    ].join(', ')
)

export const currentTime = new Date("2018-03-03T10:25:00")

export const progress = (start, end, current) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const currentDate = new Date(current&& currentTime);

    return Math.min(
        Math.max(
            ((currentDate - startDate) / (endDate - startDate)),
            0
        ),
        1
    )
}

export const isToday = (dateString) => {
    const date = new Date(dateString);

    return date.getFullYear() === currentTime.getFullYear() &&
        date.getMonth() === currentTime.getMonth() &&
        date.getDate() === currentTime.getDate()
}