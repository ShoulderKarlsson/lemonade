import { exec } from 'child_process'

/**
 * Runs a command in the terminal (command line)
 * @param {String} command command to be run
 */
export function cmd(command) {
  return new Promise((res, rej) => {
    exec(command, (error, data, stdError) => {
      if (error || stdError) return rej(error || stdError)

      res(data)
    })
  })
}
