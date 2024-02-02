import fsPromises from 'node:fs/promises'

const listCurrentDir = async () => {
  try {
    await fsPromises.access(process.cwd())
    const files = await fsPromises.readdir(process.cwd(), {
      withFileTypes: true,
    })

    const filesList = files.map((file) => {
      const type = file.isFile() ? 'file' : 'directory'
      return { filename: file.name, type }
    })

    console.table(
      filesList.sort(
        (a, b) => a.type.localeCompare(b.type) || a.filename - b.filename
      )
    )
  } catch (error) {
    throw new Error(error)
  }
}

export { listCurrentDir }
