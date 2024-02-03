import { listCurrentDir } from './list.js'
import { changeDir, printCurrentDir, goToUpperDir } from './dir.js'
import { createFile, readFile, renameFile } from './file.js'

const printInvalidInputMessage = () => {
  console.log('Invalid input')
}

const commandsHandler = async (command) => {
  const currentCommand = command.split(' ')[0]
  const currentParam = command.replace(/^[^ ]* /, '')
  const commandArgs = command.split(' ')

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
      if (commandArgs.length !== 2) {
        printInvalidInputMessage()
        break
      }
      await createFile(currentParam)
      break

    case 'rename':
      if (commandArgs.length !== 3) {
        printInvalidInputMessage()
        break
      }
      await renameFile(...currentParam.split(' '))
      break

    default:
      printInvalidInputMessage()
      break
  }

  printCurrentDir()
}

export { commandsHandler }
