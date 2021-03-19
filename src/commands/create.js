const { Command, flags } = require('@oclif/command')
const validateAlgorithm = require('../validate-algorithm')
const nJwt = require('njwt')
const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)
class CreateCommand extends Command {
  async run() {
    const { flags } = this.parse(CreateCommand)
    const key = flags.key
    // load contents of json file into Buffer
    const contents = await readFile(flags.json)
    const json = JSON.parse(Buffer.from(contents))
    const alg = validateAlgorithm(flags.algorithm)
    const jwt = nJwt.create(json, key, alg)
    const token = jwt.compact()
    this.log(token)
  }
}

CreateCommand.description = 'Create a JWT from a JSON file and secret string'

CreateCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: 'v' }),
  // add --help flag to show CLI help
  help: flags.help({ char: 'h' }),
  // add --json flag for file of json to parse
  json: flags.string({ char: 'j', description: 'file of json to encode', required: true }),
  // add --key flag for secret key to be passed
  key: flags.string({ char: 'k', description: 'secret key to encrypt', required: true }),
  // add --algorithm flag for various methods of generation to be used
  algorithm: flags.string({ char: 'a', description: 'algorithm', required: false }),
}

module.exports = CreateCommand
