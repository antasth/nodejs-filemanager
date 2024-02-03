import { listCurrentDir } from './list.js'
import { changeDir, printCurrentDir, goToUpperDir } from './dir.js'
import { readFile } from './read.js'
import { createFile } from './file.js'

const printInvalidInputMessage = () => {
  console.log('Invalid input')
}

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

    case 'add':
      if (command.split(' ').length !== 2) {
        printInvalidInputMessage()
        break
      }
      await createFile(currentParam)
      break

    default:
      printInvalidInputMessage()
      break
  }

  printCurrentDir()
}

export { commandsHandler }
