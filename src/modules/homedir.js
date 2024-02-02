import { homedir } from 'os'

const changeDir = (path) => {
  console.log('path', path)
  try {
    process.chdir(path)
  } catch (error) {
    console.log('Error while changing directory')
  }
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

export { printHomeDir, printCurrentDir, setHomeDir, changeDir }
