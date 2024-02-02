import { homedir } from 'os'
import path from 'path'

const changeDir = (path) => {
  console.log('path', path)
  try {
    process.chdir(path)
  } catch (error) {
    console.log('Error while changing directory')
  }
}

const goToUpperDir = () => {
  process.chdir(path.join(process.cwd(), '..'))
}

const setHomeDir = () => {
  process.chdir(homedir())
}

const printHomeDir = () => {
  console.log(`You are currently in ${homedir()}`)
}

const printCurrentDir = () => {
  console.log(`You are currently in ${process.cwd()}`)
}

export { printHomeDir, printCurrentDir, setHomeDir, changeDir, goToUpperDir }
