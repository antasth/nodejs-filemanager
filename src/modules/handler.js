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
import {
  printOsEol,
  printCpus,
  printHomeDir,
  printUserName,
  printCpuArchitecture,
} from './os.js'
import { hashCalculation } from './hash.js'
import { compress, decompress } from './compress.js'

const getParams = (command) => {
  if (command.split(' ').length === 1) return []
  const currentParams = command.replace(/^[^ ]* /, '')
  return currentParams.includes('"')
    ? currentParams
        .split('"')
        .map((str) => str.trim())
        .filter((str) => str.length)
    : currentParams.split(' ')
}

const commandsHandler = async (command) => {
  const currentCommand = command.split(' ')[0]
  const currentParams = getParams(command)
  const commandArgs = command.split(' ')

  switch (currentCommand) {
    case 'ls':
      await listCurrentDir()
      break

    case 'up':
      if (currentParams.length) {
        printInvalidInputMessage()
        break
      }
      goToUpperDir()
      break

    case 'cd':
      if (currentParams.length !== 1) {
        printInvalidInputMessage()
        break
      }
      await changeDir(...currentParams)
      break

    case 'cat':
      if (currentParams.length !== 1) {
        printInvalidInputMessage()
        break
      }
      await readFile(...currentParams)
      break

    case 'add':
      if (currentParams.length !== 1) {
        printInvalidInputMessage()
        break
      }
      await createFile(...currentParams)
      break

    case 'rn':
      if (currentParams.length !== 2) {
        printInvalidInputMessage()
        break
      }
      await renameFile(...currentParams)
      break

    case 'cp':
      if (currentParams.length !== 2) {
        printInvalidInputMessage()
        break
      }
      await copyFile(...currentParams)
      break

    case 'mv':
      if (currentParams.length !== 2) {
        printInvalidInputMessage()
        break
      }
      await moveFile(...currentParams)
      break

    case 'rm':
      if (currentParams.length !== 1) {
        printInvalidInputMessage()
        break
      }
      await removeFile(...currentParams)
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
        if (commandArgs[1] === '--architecture') {
          printCpuArchitecture()
          break
        }
      }

    case 'hash':
      if (currentParams.length !== 1) {
        printInvalidInputMessage()
        break
      }
      await hashCalculation(...currentParams)
      break

    case 'compress':
      if (currentParams.length !== 2) {
        printInvalidInputMessage()
        break
      }
      await compress(...currentParams)
      break

    case 'decompress':
      if (currentParams.length !== 2) {
        printInvalidInputMessage()
        break
      }
      await decompress(...currentParams)
      break

    default:
      printInvalidInputMessage()
      break
  }

  printCurrentDir()
}

export { commandsHandler }
