import { listCurrentDir } from './list.js'
import { changeDir, printCurrentDir, goToUpperDir } from './dir.js'
import { readFile } from './read.js'

const commandsHandler = async (command) => {
  const currentCommand = command.split(' ')[0]
  const currentParam = command.replace(/^[^ ]* /, '')

  switch (currentCommand) {
    case 'ls':
      await listCurrentDir()
      break

    case 'up':
      goToUpperDir()
      break

    case 'cd':
      await changeDir(currentParam)
      break

    case 'cat':
      await readFile(currentParam)
      break

    default:
      console.log('Invalid input')
      break
  }

  printCurrentDir()
}

export { commandsHandler }
