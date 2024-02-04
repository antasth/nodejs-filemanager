import readline from 'readline'
import { setHomeDir } from './modules/dir.js'
import { commandsHandler } from './modules/handler.js'
import { parseUserName } from './modules/username.js'
import {
  printGoodbyeMessage,
  printWelcomeMessage,
  printHomeDir,
} from './modules/messages.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const start = async () => {
  const userName = await parseUserName()
  printWelcomeMessage(userName)
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
    printGoodbyeMessage(userName)
  })
}

await start()
