const { expect, test } = require('@oclif/test')
const nJwt = require('njwt')

const jsonTest = './test/test.json'

describe('>> CREATE', () => {
  test
  .stdout()
  .command(['create', '-j', jsonTest])
  .catch(error => {
    expect(error.message).to.contain('secret key to encrypt')
    expect(error.message).to.contain('See more help with --help')
  })
  .it('requires KEY argument')

  test
  .stdout()
  .command(['create', '--key', 'secret'])
  .catch(error => {
    expect(error.message).to.contain('file of json to encode')
    expect(error.message).to.contain('See more help with --help')
  })
  .it('requires JSON argument')

  test
  .stdout()
  .command(['create', '--key', 'secret', '--json', jsonTest])
  .it('correctly encrypts payload (will verify with correct secret)', async ctx => {
    const verify = await nJwt.verify(ctx.stdout, 'secret')
    expect(verify.header.typ).to.equal('JWT')
  })

  test
  .stdout()
  .command(['create', '--algorithm', 'HS512', '--key', 'secret', '--json', jsonTest])
  .it('correctly encrypts payload using non-default algorithm', async ctx => {
    const verify = await nJwt.verify(ctx.stdout, 'secret', 'HS512')
    expect(verify.header.typ).to.equal('JWT')
  })

  test
  .stdout()
  .command(['create', '--key', 'secret', '--json', jsonTest])
  .it('correctly encrypts payload (will NOT verify with incorrect secret)', async ctx => {
    expect(function () {
      const verify = nJwt.verify(ctx.stdout, 'secret2')
      return verify
    }).to.throw()
  })
})
