

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

