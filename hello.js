import moment from 'moment'

export function words(name) {
    const now = moment()
    return `Hello, ${name}! (${now})`
}