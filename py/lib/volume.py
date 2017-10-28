from command import cmd

def volume():
  current_volume = cmd("amixer get Master | awk '$0~/%/{print $4}' | tr -d '[]'")
  return current_volume.strip()

