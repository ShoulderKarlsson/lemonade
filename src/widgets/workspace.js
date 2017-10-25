import { cmd } from '../utils/command'

const workspace = async () => {
  const WS_INFORMATION = 'i3-msg -t get_workspaces'
  const info = await cmd(WS_INFORMATION)
  return JSON.parse(info).reduce(
    (str, { num, focused }) => (str += focused ? `[${num}]` : `${num}`),
    '',
  )
}

export const workspaceWidget = workspace
