import { listCurrentDir } from './list.js'
import { changeDir, printCurrentDir, goToUpperDir } from './dir.js'

const commandsHandler = async (command) => {
  const currentCommand = command.split(' ')[0]

  switch (currentCommand) {
    case 'ls':
      await listCurrentDir()
      break

    case 'up':
      goToUpperDir()
      break

    case 'cd':
      const path = command.replace(/^[^ ]* /, '')
      await changeDir(path)
      break

    default:
      console.log('Invalid input')
      break
  }

  printCurrentDir()
}

export { commandsHandler }
