jwtcli
======

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![npm (scoped)](https://img.shields.io/npm/v/@jplomas/jwtcli)
[![Codecov](https://codecov.io/gh/jplomas/jwtcli/branch/main/graph/badge.svg)](https://codecov.io/gh/jplomas/jwtcli)
[![Build Status](https://travis-ci.org/jplomas/jwtcli.svg?branch=main)](https://travis-ci.org/jplomas/jwtcli)
[![License](https://img.shields.io/npm/l/jwtcli.svg)](https://github.com/jplomas/jwtcli/blob/main/package.json)

Create JWTs from the command line.

Essentially this is a wrapper around the njwt npm package using oclif.

Install from npm or binary release (only a [windows binary installer](https://github.com/jplomas/jwtcli/releases) has been built: open an issue if other builds/platform binary releases are required).

``` bash
jwtcli create --json test.json --key secret
```

Both of these flags are required.

By default, HS256 is used to create the JWT.  Alternative algorithms can be used by specifying an `-a` or `--algorithm` flag:

```bash
jwtcli create --json test.json --key secret --algorithm HS512
```

A test .json file is in `test/`:

``` bash
jwtcli create -k secret -j test/test.json
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImJjNzZkNDU5LWJjYjEtNGQyOS1iNDU0LTgzYTZkMDdhMTBmMSIsImlhdCI6MTYxNjE1ODczMiwiZXhwIjoxNjE2MTYyMzMyfQ.Em0yCPN82u3OPInQ7xJ0MK7VtcLK_sJLAaaZG7qb9Ns
```

JWTs can be verified at <https://jwt.io/> (remember to input the correct `secret`) or with the `verify` command (see CLI reference below).


Auto-generated CLI reference below:

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @jplomas/jwtcli
$ jwtcli COMMAND
running command...
$ jwtcli (-v|--version|version)
@jplomas/jwtcli/2.0.0 darwin-x64 node-v12.16.1
$ jwtcli --help [COMMAND]
USAGE
  $ jwtcli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`jwtcli create`](#jwtcli-create)
* [`jwtcli help [COMMAND]`](#jwtcli-help-command)
* [`jwtcli verify`](#jwtcli-verify)

## `jwtcli create`

Create a JWT from a JSON file and secret string

```
Create a JWT from a JSON file and secret string

USAGE
  $ jwtcli create

OPTIONS
  -a, --algorithm=algorithm  algorithm
  -h, --help                 show CLI help
  -j, --json=json            (required) file of json to encode
  -k, --key=key              (required) secret key to encrypt
  -v, --version              show CLI version
```

_See code: [src/commands/create.js](https://github.com/jplomas/jwtcli/blob/v2.0.0/src/commands/create.js)_

## `jwtcli help [COMMAND]`

display help for jwtcli

```
display help for <%= config.bin %>

USAGE
  $ jwtcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `jwtcli verify`

Verify a JWT string secret string

```
Verify a JWT string secret string

USAGE
  $ jwtcli verify

OPTIONS
  -a, --algorithm=algorithm  (optional) algorithm; defaults to HS256 if not specified
  -h, --help                 show CLI help
  -k, --key=key              (required) signing key (or public key if ECC used)
  -t, --token=token          (required) JWT to verify
  -v, --version              show CLI version
```

_See code: [src/commands/verify.js](https://github.com/jplomas/jwtcli/blob/v2.0.0/src/commands/verify.js)_
<!-- commandsstop -->
