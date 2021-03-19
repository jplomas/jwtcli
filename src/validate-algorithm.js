function validateAlgorithm(alg) {
  if (!alg) {
    return 'HS256'
  }
  let outcome = 'HS256'
  const valid = ['HS256', 'HS384', 'HS512', 'RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512']
  for (let index = 0; index < valid.length; index++) {
    if (alg.toUpperCase() === valid[index]) {
      outcome = valid[index]
    }
  }
  return outcome
}

module.exports = validateAlgorithm
