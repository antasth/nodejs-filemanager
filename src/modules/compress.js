import { createBrotliCompress, createBrotliDecompress } from 'zlib'
import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import path from 'path'
import { pipeline } from 'stream/promises'

const compressExtension = '.br'

const compress = async (pathToFile, pathToDestination) => {
  try {
    await fsPromises.access(pathToFile)

    await fsPromises.access(pathToDestination).catch(() => {
      fsPromises.mkdir(pathToDestination, { recursive: true })
    })

    const fullPathToDestination = path.resolve(
      pathToDestination,
      `${path.basename(pathToFile)}${compressExtension}`
    )

    const readStream = fs.createReadStream(pathToFile)
    const writeStream = fs.createWriteStream(fullPathToDestination)
    const brotliStream = createBrotliCompress()

    pipeline(readStream, brotliStream, writeStream)
  } catch (error) {
    throw new Error()
  }
}

const decompress = async (pathToFile, pathToDestination) => {
  try {
    await fsPromises.access(pathToFile)

    await fsPromises.access(pathToDestination).catch(() => {
      fsPromises.mkdir(pathToDestination, { recursive: true })
    })

    const fullPathToDestination = path.resolve(
      pathToDestination,
      path.basename(pathToFile).replace(compressExtension, '')
    )

    const readStream = fs.createReadStream(pathToFile)
    const writeStream = fs.createWriteStream(fullPathToDestination)
    const brotliStream = createBrotliDecompress()

    pipeline(readStream, brotliStream, writeStream)
  } catch (error) {
    throw new Error()
  }
}

export { compress, decompress }
