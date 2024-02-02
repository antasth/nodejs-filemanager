import { printCurrentDir } from './homedir.js'
import { listCurrentDir } from './list.js'

const handler = (command) => {
  console.log('your command is ', command)
  if (command === 'ls') listCurrentDir()
}

export { handler }
