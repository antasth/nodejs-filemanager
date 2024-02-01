const parseArgs = async () => {
  const regexp = /^--username=/
  let userName = null

  process.argv.forEach((prop) => {
    if (regexp.test(prop)) {
      userName = prop.replace(regexp, '')
    }
  })
  return userName ?? 'noname'
}

export { parseArgs }
