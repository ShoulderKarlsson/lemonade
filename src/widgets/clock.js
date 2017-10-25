const clock = () => {
  const d = new Date()
  return `${d.getHours()}:${d.getMinutes()}`
}

export const clockWidget = clock
