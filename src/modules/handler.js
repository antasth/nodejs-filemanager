import { printHomeDir } from './homedir.js'

const handler = (command) => {
  console.log('your command is ', command)
  printHomeDir()
}

export { handler }
