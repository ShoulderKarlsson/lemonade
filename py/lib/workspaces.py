from command import cmd
from json import loads
def workspaces():
  payload = cmd('i3-msg -t get_workspaces')
  ws_info = loads(payload)
  buffer = reduce(lambda acc, curr: "%s %s" % (acc, "[%s]" % curr['name']) if curr['visible'] else "%s %s" % (acc, curr['name']), ws_info, '')
  return "{} |".format(buffer.strip())
