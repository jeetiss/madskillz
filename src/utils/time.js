export const uniTime = (time) => Math.trunc(time / 1000)

export const nowTime = () => uniTime(Date.now())

const val = ['days', 'hours', 'minutes', 'seconds']
export const splitTime = time => {
  return [[1000, 86400], [24, 3600], [60, 60], [60, 1]].map(
    function ([mod, gap]) {
      return Math.trunc(time / gap) % mod
    }
  ).reduce(
    (store, next, index, arr) => Object.assign(store, {[val[index]]: next}),
    {}
  )
}

const arr = {
  days: ['дней', 'день', 'дня', 'дня', 'дня'],
  hours: ['часов', 'час', 'часа', 'часа', 'часа'],
  minutes: ['минут', 'минуту', 'минуты', 'минуты', 'минуты'],
  seconds: ['секунд', 'секунду', 'секунды', 'секунды', 'секунды']
}

export const exp = (splitTime) => Object.keys(arr).map(
  (key) => {
    const last = splitTime[key] % 10
    const mapa = arr[key]
    return { [key]: mapa[last] ? mapa[last] : mapa[0] }
  }
).reduce((store, next) => Object.assign(store, next), {})

