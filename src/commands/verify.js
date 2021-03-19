const { Command, flags } = require('@oclif/command')

const nJwt = require('njwt')

class VerifyCommand extends Command {
  async run() {
    const { flags } = this.parse(VerifyCommand)
    try {
      const verify = nJwt.verify(flags.token, flags.key, 'HS256')
      this.log('JWT is valid')
      this.log(verify.body)
    } catch (error) {
      this.error(error.message)
    }
  }
}

VerifyCommand.description = 'Verify a JWT string secret string'

VerifyCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: 'v' }),
  // add --help flag to show CLI help
  help: flags.help({ char: 'h' }),
  // add --json flag for file of json to parse
  token: flags.string({ char: 't', description: 'JWT to verify', required: true }),
  // add --key flag for secret key to be passed
  key: flags.string({ char: 'k', description: 'signing key (or public key if ECC used)', required: true }),
}

module.exports = VerifyCommand
