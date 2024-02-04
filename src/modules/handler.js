import { listCurrentDir } from './list.js'
import { changeDir, goToUpperDir } from './dir.js'
import {
  createFile,
  readFile,
  renameFile,
  copyFile,
  moveFile,
  removeFile,
} from './file.js'
import { printInvalidInputMessage, printCurrentDir } from './messages.js'
import { printOsEol, printCpus, printHomeDir, printUserName } from './os.js'

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

    case 'rn':
      if (commandArgs.length !== 3) {
        printInvalidInputMessage()
        break
      }
      await renameFile(...currentParam.split(' '))
      break

    case 'cp':
      if (commandArgs.length !== 3) {
        printInvalidInputMessage()
        break
      }
      await copyFile(...currentParam.split(' '))
      break

    case 'mv':
      if (commandArgs.length !== 3) {
        printInvalidInputMessage()
        break
      }
      await moveFile(...currentParam.split(' '))
      break

    case 'rm':
      if (commandArgs.length !== 2) {
        printInvalidInputMessage()
        break
      }
      await removeFile(currentParam)
      break

    case 'os':
      if (commandArgs.length === 2) {
        if (commandArgs[1] === '--EOL') {
          printOsEol()
          break
        }
        if (commandArgs[1] === '--cpus') {
          printCpus()
          break
        }
        if (commandArgs[1] === '--homedir') {
          printHomeDir()
          break
        }
        if (commandArgs[1] === '--username') {
          printUserName()
          break
        }
      }

    default:
      printInvalidInputMessage()
      break
  }

  printCurrentDir()
}

export { commandsHandler }
