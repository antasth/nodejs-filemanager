import fsPromises from 'node:fs/promises'

const listCurrentDir = async () => {
  try {
    await fsPromises.access(process.cwd())
    const files = await fsPromises.readdir(process.cwd())

    const filesList = await Promise.all(
      files.map(async (file) => {
        const stat = await fsPromises.lstat(file)
        const type = stat.isFile() ? 'file' : 'directory'
        return { filename: file, type }
      })
    )
    console.table(filesList.sort((a, b) => (a.type > b.type ? 1 : -1)))
  } catch (error) {
    throw new Error()
  }
}

export { listCurrentDir }
