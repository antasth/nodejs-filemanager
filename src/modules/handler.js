import { printCurrentDir } from './homedir.js'

const handler = (command) => {
  console.log('your command is ', command)
  printCurrentDir()
}

export { handler }
