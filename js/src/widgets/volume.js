import { cmd } from '../utils/command'

/**
 * Simple widget to get current volume settings
 */
const volume = async () => {
  const volume = await cmd(
    "amixer get Master | awk '$0~/%/{print $4}' | tr -d '[]'",
  )
  return volume
}

export const volumeWidget = volume
