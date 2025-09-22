const date = new Date()
const date2 = new Date(2026, 0, 1)
const date3 = new Date().getTimezoneOffset()
const date4 = new Date().toISOString()
const date5 = new Date().toUTCString()
const date6 = new Date().toLocaleString()
const date7 = new Date().toLocaleString('en-US')
const date8 = new Date().toLocaleDateString()
const date9 = new Date().toLocaleTimeString()
const date10 = new Date().toLocaleString(undefined, {dateStyle: 'long', timeStyle: 'long'})
const date11 = Date.now()

console.log(date11)



const today = new Date()
const tomorrow = addDays(today, 1)


function addDays(date, days) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + days)
    
    return newDate
}


console.log(today)
console.log(tomorrow)



const days = 'days'
const months = 'months'
const years ='years'

const future = addInterval(today, 3, years)

function addInterval(date, n, unit) {
    const newDate = new Date(date)

    // if (unit === 'days') {
    //     newDate.setDate(newDate.getDate() + n)
    // } else if (unit === 'months') {
    //     newDate.setMonth(newDate.getMonth() + n)
    // } else if (unit === 'years') {
    //     newDate.setFullYear(newDate.getFullYear() + n)
    // }

    switch (unit) {
        case days:
            newDate.setDate(newDate.getDate() + n)
            break;
        case months:
            newDate.setMonth(newDate.getMonth() + n)
        case years:
            newDate.setFullYear(newDate.getFullYear() + n)
            break;
    }

    return newDate
}

console.log(future)
