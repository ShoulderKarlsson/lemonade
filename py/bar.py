import subprocess
from datetime import datetime
from json import loads

def cmd(command):
  return subprocess.Popen(command, shell=True, stdout=subprocess.PIPE).stdout.read()

def battery():
  capacity = cmd('cat /sys/class/power_supply/BAT0/capacity')
  return capacity.strip()

def workspaces():
  payload = cmd('i3-msg -t get_workspaces')
  ws_info = loads(payload)
  buffer = reduce(lambda acc, curr: "%s %s" % (acc, "[%s]" % curr['name']) if curr['visible'] else "%s %s" % (acc, curr['name']), ws_info, '')
  return "{} |".format(buffer.strip())

def volume():
  current_volume = cmd("amixer get Master | awk '$0~/%/{print $4}' | tr -d '[]'")
  return current_volume.strip()

def clock():
  current_minute = datetime.now().minute
  minute = "0%s" % (datetime.now().minute) if current_minute < 10 else current_minute
  return '{}:{}'.format(datetime.now().hour, minute)


def network():
  return cmd('iwgetid -r').strip()

def main():
  widgets = [
    workspaces,
    network,
    volume,
    battery,
    clock
  ]
  # String buffer for bar
  buffer = reduce(lambda acc, curr: "%s %s" % (acc, curr()), widgets, '')
  print buffer.strip()

if __name__ == '__main__':
  main()
