jwtcli
======

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![npm (scoped)](https://img.shields.io/npm/v/@jplomas/jwtcli)
[![Codecov](https://codecov.io/gh/jplomas/jwtcli/branch/main/graph/badge.svg)](https://codecov.io/gh/jplomas/jwtcli)
[![Build Status](https://travis-ci.org/jplomas/jwtcli.svg?branch=main)](https://travis-ci.org/jplomas/jwtcli)
[![License](https://img.shields.io/npm/l/jwtcli.svg)](https://github.com/jplomas/jwtcli/blob/main/package.json)

Create JWTs from the command line.

Install from npm or binary release (only a windows binary has been built: open an issue if other platform binary releases are required).

``` bash
jwtcli --json test.json --key secret
```

Both flags are required.

![Powershell](powershell.png)

A test .json file is in `test/`:

``` bash
jwtcli -k secret -j test/test.json
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImJjNzZkNDU5LWJjYjEtNGQyOS1iNDU0LTgzYTZkMDdhMTBmMSIsImlhdCI6MTYxNjE1ODczMiwiZXhwIjoxNjE2MTYyMzMyfQ.Em0yCPN82u3OPInQ7xJ0MK7VtcLK_sJLAaaZG7qb9Ns
```

JWTs can be verified at <https://jwt.io/> (remember to input the correct `secret`)
