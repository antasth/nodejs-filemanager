// Compress and decompress operations
// Compress file (using Brotli algorithm, should be done using Streams API)
// compress path_to_file path_to_destination
// Decompress file (using Brotli algorithm, should be done using Streams API)
// decompress path_to_file path_to_destination
// NB! After decompressing of previously compressed file result should not differ with originally compressed file

import { createBrotliCompress } from 'zlib'
import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import path from 'path'
import { pipeline } from 'stream/promises'

const compress = async (pathToFile, pathToDestination) => {
  const regExp = /\..*$/
  const compressExtension = '.br'
  try {
    await fsPromises.access(pathToFile)

    await fsPromises.access(pathToDestination).catch(() => {
      fsPromises.mkdir(pathToDestination, { recursive: true })
    })

    const fullPathToDestination = path.resolve(
      pathToDestination,
      path.basename(pathToFile).replace(regExp, compressExtension)
    )

    const readStream = fs.createReadStream(pathToFile)
    const writeStream = fs.createWriteStream(fullPathToDestination)
    const brotliStream = createBrotliCompress()

    pipeline(readStream, brotliStream, writeStream)
  } catch (error) {
    throw new Error()
  }
}

export { compress }
