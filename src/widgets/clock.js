const clock = () => {
  const d = new Date()
  const hours = d.getHours()
  const minutes = d.getMinutes()
  const date = d.getDate()
  const month = d.getMonth() + 1
  return `${hours}:${minutes} - ${date}/${month}`
}

export const clockWidget = clock
