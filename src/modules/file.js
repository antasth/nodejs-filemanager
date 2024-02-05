import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
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

const createFile = async (fileName) => {
  let fileHandle
  try {
    const filePath = path.join(process.cwd(), fileName)

    fileHandle = await fsPromises.open(filePath, 'a')
  } catch (error) {
    throw new Error()
  } finally {
    await fileHandle.close()
  }
}

const renameFile = async (pathToFile, newFileName) => {
  try {
    await fsPromises.access(pathToFile)

    await fsPromises.rename(pathToFile, newFileName)
  } catch (error) {
    throw new Error()
  }
}

const copyFile = async (pathToFile, pathToNewDirectory) => {
  try {
    await fsPromises.access(pathToFile)

    await fsPromises.access(pathToNewDirectory).catch(() => {
      fsPromises.mkdir(pathToNewDirectory)
    })

    const fullPathToNewDirectory = path.resolve(
      pathToNewDirectory,
      path.basename(pathToFile)
    )
    console.log('fullPathToNewDirectory', fullPathToNewDirectory)
    const readStream = fs.createReadStream(pathToFile)
    const writeStream = fs.createWriteStream(fullPathToNewDirectory)

    readStream.pipe(writeStream)

    readStream.on('end', () => {
      writeStream.close()
    })
    writeStream.on('error', () => {
      console.log('Operation failed')
    })
  } catch (error) {
    throw new Error()
  }
}

const moveFile = async (pathToFile, pathToNewDirectory) => {
  try {
    await fsPromises.access(pathToFile)

    await fsPromises.access(pathToNewDirectory).catch(() => {
      fsPromises.mkdir(pathToNewDirectory)
    })

    const fullPathToNewDirectory = path.resolve(
      pathToNewDirectory,
      path.basename(pathToFile)
    )

    const readStream = fs.createReadStream(pathToFile)
    const writeStream = fs.createWriteStream(fullPathToNewDirectory)

    readStream.pipe(writeStream)

    readStream.on('end', () => {
      fsPromises.unlink(pathToFile)
      writeStream.close()
    })
  } catch (error) {
    throw new Error()
  }
}

const removeFile = async (pathToFile) => {
  try {
    await fsPromises.access(pathToFile)
    await fsPromises.unlink(pathToFile)
  } catch (error) {
    throw new Error()
  }
}

export { copyFile, createFile, readFile, renameFile, moveFile, removeFile }
