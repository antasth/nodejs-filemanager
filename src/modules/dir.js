import { homedir } from 'os'
import path from 'path'

const changeDir = async (path) => {
  try {
    process.chdir(path)
  } catch (error) {
    throw new Error()
  }
}

const goToUpperDir = () => {
  process.chdir(path.join(process.cwd(), '..'))
}

const setHomeDir = () => {
  process.chdir(homedir())
}

// const printHomeDir = () => {
//   console.log(`You are currently in ${homedir()}`)
// }

// const printCurrentDir = () => {
//   console.log(`You are currently in ${process.cwd()}`)
// }

export { setHomeDir, changeDir, goToUpperDir }
// export { printHomeDir, printCurrentDir, setHomeDir, changeDir, goToUpperDir }
