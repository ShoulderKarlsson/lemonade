import { cmd } from '../utils/command'
const network = () => {

  // Getting name of connected wifi
  const command = 'iwgetid -r'
  return cmd(command)
}



export const networkWidget = network
