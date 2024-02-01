import readline from 'readline'
import { parseArgs } from './modules/args.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const start = async () => {
  const userName = await parseArgs()
  console.log(`Welcome to the File Manager, ${userName}!`)
  rl.on('line', (command) => {
    if (command === '.exit') {
      console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
      return rl.close()
    }
    console.log('your command is ', command)
  })
}

await start()
