import fs from 'node:fs'
import path from 'path'

const readFile = async (pathToFile) => {
  try {
    await new Promise((resolve, reject) => {
      const readableStream = fs.createReadStream(
        path.join(process.cwd(), pathToFile),
        'utf-8'
      )
      readableStream.on('data', (chunk) => console.log(chunk))
      readableStream.on('end', () => resolve())
      readableStream.on('error', () => reject())
    })
  } catch (error) {
    throw new Error()
  }
}

export { readFile }
