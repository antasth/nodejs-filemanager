import fsPromises from 'node:fs/promises'
import path from 'node:path'

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

export { createFile }
