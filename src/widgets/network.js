import { cmd } from '../utils/command'

/**
 * Presents name for connected wifi
 */
const network = () => {
  const command = 'iwgetid -r'
  return cmd(command)
}



export const networkWidget = network
