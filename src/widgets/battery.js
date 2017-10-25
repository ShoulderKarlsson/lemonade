import { cmd } from '../utils/command'
const battery = async () => {
  const BATTERY_STATUS = 'cat /sys/class/power_supply/BAT0/status'
  const BATTERY_CAPACITY = 'cat /sys/class/power_supply/BAT0/capacity'

  const capacity = await cmd(BATTERY_CAPACITY)
  const status = await cmd(BATTERY_STATUS)

  // Maybe want to add icon in the future for loading =)
  // return status === 'Charging' ? `${capacity}` : capacity

  return capacity
}

export const batteryWidget = battery
