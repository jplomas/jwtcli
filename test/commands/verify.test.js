const { expect, test } = require('@oclif/test')
const nJwt = require('njwt')

const expiredToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImJjNzZkNDU5LWJjYjEtNGQyOS1iNDU0LTgzYTZkMDdhMTBmMSIsImlhdCI6MTYxNjE1ODczMiwiZXhwIjoxNjE2MTYyMzMyfQ.Em0yCPN82u3OPInQ7xJ0MK7VtcLK_sJLAaaZG7qb9Ns'
const json = { test: 123 }
const jwt = nJwt.create(json, 'secret', 'HS256')
const newToken = jwt.compact()
const invalidToken = newToken.substring(0, newToken.length - 3)

describe('>> VERIFY', () => {
  test
  .stdout()
  .command(['verify', '-t', expiredToken])
  .catch(error => {
    expect(error.message).to.contain('signing key (or public key if ECC used)')
    expect(error.message).to.contain('See more help with --help')
  })
  .it('requires KEY argument')

  test
  .stdout()
  .command(['verify', '--key', 'secret'])
  .catch(error => {
    expect(error.message).to.contain('JWT to verify')
    expect(error.message).to.contain('See more help with --help')
  })
  .it('requires TOKEN argument')

  test
  // .stdout()
  .command(['verify', '--key', 'secret', '--token', expiredToken])
  .catch(error => {
    expect(error.oclif.exit).to.not.equal(0)
  })
  .it('non-zero exit code on expired token')

  test
  .stdout()
  .command(['verify', '--key', 'secret', '--token', expiredToken])
  .catch(error => {
    expect(error.message).to.contain('Jwt is expired')
  })
  .it('Reports expired token')

  test
  // .stdout()
  .command(['verify', '--key', 'secret', '--token', invalidToken])
  .catch(error => {
    expect(error.oclif.exit).to.not.equal(0)
  })
  .it('non-zero exit code on invalid token')

  test
  .stdout()
  .command(['verify', '--key', 'secret', '--token', invalidToken])
  .catch(error => {
    expect(error.message).to.contain('Signature verification failed')
  })
  .it('Reports invalid token')

  test
  .stdout()
  .command(['verify', '--key', 'secret', '--token', newToken])
  .it('correctly reports a valid token', async ctx => {
    expect(ctx.stdout).to.contain('JWT is valid')
  })
})
