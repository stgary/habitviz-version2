module.exports = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || ':(',
  DATABASE: process.env.DATABASE || 'DBPLAN',
  DB_PASS: process.env.DB_PASS || 'j233ancigp3po',
  DB_USER: process.env.DB_USER || 'postgre',
  ENVIRONMENT: process.env.DB_ENV || "production"
}