import fsPromises from 'node:fs/promises'
import fs from 'node:fs'
import crypto from 'crypto'

const hashCalculation = async (pathToFile) => {
  console.log(pathToFile)
  try {
    await fsPromises.access(pathToFile)

    await new Promise((resolve, reject) => {
      const fileReadStream = fs.createReadStream(pathToFile)
      const hash = crypto.createHash('sha256')

      fileReadStream.on('data', (data) => {
        hash.update(data)
      })

      fileReadStream.on('end', () => {
        console.log(hash.digest('hex'))
        resolve()
      })

      fileReadStream.on('error', () => {
        reject()
      })
    })
  } catch (error) {
    throw new Error()
  }
}

export { hashCalculation }
