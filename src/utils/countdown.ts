import moment from 'moment'

export const dayCounter = (timeStamp: number) => {
  const days = Math.floor(moment.duration(timeStamp).asDays())
  if (days < 1) return 0
  return days
}

export const hourCounter = (timeStamp: number) => {
  const hours = moment.duration(timeStamp).hours()
  if (hours < 1) return 0
  return hours
}

export const minuteCounter = (timeStamp: number) => {
  const minutes = moment.duration(timeStamp).minutes()
  if (minutes < 1) return 0
  return minutes
}

export const secondCounter = (timeStamp: number) => {
  const seconds = moment.duration(timeStamp).seconds()
  if (seconds < 1) return 0
  return seconds
}