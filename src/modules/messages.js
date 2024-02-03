import { homedir } from 'os'

const printHomeDir = () => {
  console.log(`You are currently in ${homedir()}`)
}

const printCurrentDir = () => {
  console.log(`You are currently in ${process.cwd()}`)
}

const printInvalidInputMessage = () => {
  console.log('Invalid input')
}

const printWelcomeMessage = (userName) => {
  console.log(`Welcome to the File Manager, ${userName}!`)
}

const printGoodbyeMessage = (userName) => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
}

export {
  printInvalidInputMessage,
  printCurrentDir,
  printHomeDir,
  printWelcomeMessage,
  printGoodbyeMessage,
}
