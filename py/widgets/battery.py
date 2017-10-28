from subprocess import Popen
import subprocess


def battery():
  capacity = subprocess.Popen('cat /sys/class/power_supply/BAT0/capacity', shell=True, stdout=subprocess.PIPE).stdout.read()
  return "{}%".format(capacity)
