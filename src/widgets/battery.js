import { cmd } from '../utils/command'

/**
 * Collects information about battery status
 */
const battery = async () => {
  const BATTERY_CAPACITY = 'cat /sys/class/power_supply/BAT0/capacity'
  const capacity = await cmd(BATTERY_CAPACITY)


  // Maybe want to add icon in when charging=)
  // const BATTERY_STATUS = 'cat /sys/class/power_supply/BAT0/status'
  // const status = await cmd(BATTERY_STATUS)
  // return status === 'Charging' ? `${capacity}` : capacity
  return capacity
}

export const batteryWidget = battery
