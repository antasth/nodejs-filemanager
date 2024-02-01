import readline from 'readline'
import { parseUserName } from './modules/username.js'
import { handler } from './modules/handler.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const start = async () => {
  const userName = await parseUserName()
  console.log(`Welcome to the File Manager, ${userName}!`)
  rl.on('line', (command) => {
    if (command === '.exit') {
      return rl.close()
    }
    handler(command)
  }).on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
  })
}

await start()
