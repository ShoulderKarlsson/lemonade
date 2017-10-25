import { clockWidget } from './widgets/clock'
import { networkWidget } from './widgets/network'
import { batteryWidget } from './widgets/battery'
import { workspaceWidget } from './widgets/workspace'

// amixer get Master | awk '$0~/%/{print $4}' | tr -d '[]'

async function main() {
  const widgets = [workspaceWidget, clockWidget, networkWidget, batteryWidget]
  const results = await Promise.all(widgets.map(w => w()))
  const barBuffer = results.reduce((str, widget) => str += ` ${widget.trim()}`, '')

  // printing to console => lemonbar uses output
  console.log(barBuffer.trim())
}

main()
