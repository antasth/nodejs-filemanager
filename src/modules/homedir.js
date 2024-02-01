import { homedir } from 'os'

const printHomeDir = () => {
  console.log(`You are currently in ${homedir()}`)
}

export { printHomeDir }
