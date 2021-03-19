const { expect, test } = require('@oclif/test')
const nJwt = require('njwt')
const cmd = require('..')

const jsonTest = 'test/test.json'

describe('jwtcli', () => {
  test
  .stdout()
  .do(() => cmd.run(['-j test.json']))
  .catch(error => {
    expect(error.message).to.contain('secret key to encrypt')
    expect(error.message).to.contain('See more help with --help')
  })
  .it('requires KEY argument')
  test
  .stdout()
  .do(() => cmd.run(['-k secret']))
  .catch(error => {
    expect(error.message).to.contain('file of json to encode')
    expect(error.message).to.contain('See more help with --help')
  })
  .it('requires JSON argument')

  test
  .stdout()
  .do(() => cmd.run(['--key', 'secret', '--json', jsonTest]))
  .it('makes a valid length jwt', async ctx => {
    expect(ctx.stdout.length).to.equal(256)
  })

  test
  .stdout()
  .do(() => cmd.run(['--key', 'secret', '--json', jsonTest]))
  .it('correctly encrypts payload (will verify with correct secret)', async ctx => {
    const verify = await nJwt.verify(ctx.stdout, 'secret')
    expect(verify.header.typ).to.equal('JWT')
  })

  test
  .stdout()
  .do(() => cmd.run(['--key', 'secret', '--json', jsonTest]))
  .it('correctly encrypts payload (will NOT verify with incorrect secret)', async ctx => {
    expect(function () {
      const verify = nJwt.verify(ctx.stdout, 'secret2')
      return verify
    }).to.throw()
  })
})
