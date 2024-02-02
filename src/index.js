import readline from 'readline'
import { printHomeDir, setHomeDir } from './modules/dir.js'
import { commandsHandler } from './modules/handler.js'
import { parseUserName } from './modules/username.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const start = async () => {
  const userName = await parseUserName()
  console.log(`Welcome to the File Manager, ${userName}!`)
  setHomeDir()
  printHomeDir()
  rl.on('line', async (command) => {
    try {
      if (command === '.exit') {
        return rl.close()
      }
      await commandsHandler(command)
    } catch (error) {
      console.log('Operation failed')
    }
  }).on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
  })
}

await start()
