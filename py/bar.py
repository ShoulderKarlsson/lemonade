from lib import battery, volume, workspaces

def main():
  widgets = [
    workspaces.workspaces,
    volume.volume,
    battery.battery,
  ]

  # String buffer for bar
  buffer = reduce(lambda acc, curr: "%s %s" % (acc, curr()), widgets, '')
  print buffer.strip()

if __name__ == '__main__':
  main()
