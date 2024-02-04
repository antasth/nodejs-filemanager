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

export { setHomeDir, changeDir, goToUpperDir }
