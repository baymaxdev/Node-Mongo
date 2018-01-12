const config = {
  development: {
    env : 'development',
    db  : 'mongodb://127.0.0.1:27017/arturo',
  },
  test: {
    env : 'test',
    db  : null,
  },
  production: {
    env : 'production',
    db  : 'mongodb://127.0.0.1:27017/arturo',
  },
  common: {
    secret      : 'asviej3489fdkdfrsiroeg48394kf',
    expiresIn   : '1h'
  }
}

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = { ...config[NODE_ENV], ...config.common }
