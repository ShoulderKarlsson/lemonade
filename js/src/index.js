import { clockWidget } from './widgets/clock'
import { networkWidget } from './widgets/network'
import { batteryWidget } from './widgets/battery'
import { workspaceWidget } from './widgets/workspace'
import { volumeWidget } from './widgets/volume'

async function main() {

  // Widgets that will be presented in lemonbar
  const widgets = [
    workspaceWidget,
    clockWidget,
    networkWidget,
    volumeWidget,
    batteryWidget,
  ]

  const results = await Promise.all(widgets.map(w => w()))
  const barBuffer = results.reduce(
    (str, widget) => (str += ` ${widget.trim()}`),
    '',
  )

  // printing to console => lemonbar uses output
  console.log(barBuffer.trim())
}

main()
