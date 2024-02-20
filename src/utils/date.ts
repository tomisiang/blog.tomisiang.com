import moment from 'moment'

export function dateId(date: string) {
  return moment(date).format('YYYYMMDD')
}

export function formattedDate(date: string) {
  return moment(date).format('ll')
}
