import { listCurrentDir } from './list.js'
import { changeDir, printCurrentDir, goToUpperDir } from './dir.js'

const commandsHandler = async (command) => {
  console.log('your command is ', command)
  const currentCommand = command.split(' ')[0]

  switch (currentCommand) {
    case 'ls':
      await listCurrentDir()
      break

    case 'up':
      goToUpperDir()
      break

    case 'cd':
      const path = command.split(' ')[1]
      changeDir(path)
      break

    default:
      break
  }

  printCurrentDir()
}

export { commandsHandler }
