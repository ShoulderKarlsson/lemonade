from command import cmd

def battery():
  capacity = cmd('cat /sys/class/power_supply/BAT0/capacity')
  return capacity.strip()
