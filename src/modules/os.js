import os, { homedir } from 'os'

const printOsEol = () => {
  console.log(`default system End-Of-Line is ${JSON.stringify(os.EOL)}`)
}

const printCpus = () => {
  const cpus = os.cpus()
  console.log('Overall amount of CPUS:', cpus.length)
  cpus.forEach((cpu) => {
    console.log(
      `Cpu model ${cpu.model.trim()}, clock rate ${cpu.speed / 1000} GHz`
    )
  })
}

const printHomeDir = () => {
  console.log(homedir())
}

const printUserName = () => {
  console.log(os.userInfo().username)
}

const printCpuArchitecture = () => {
  console.log(os.arch())
}

export {
  printOsEol,
  printCpus,
  printHomeDir,
  printUserName,
  printCpuArchitecture,
}
