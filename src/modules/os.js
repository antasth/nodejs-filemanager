// Operating system info (prints following information in console)
// Get EOL (default system End-Of-Line) and print it to console
// os --EOL
// Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console
// os --cpus
// Get home directory and print it to console
// os --homedir
// Get current system user name (Do not confuse with the username that is set when the application starts) and print it to console
// os --username
// Get CPU architecture for which Node.js binary has compiled and print it to console
// os --architecture

import os from 'os'

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

export { printOsEol, printCpus }
