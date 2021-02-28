const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.production'
})


module.exports = {
  "type": "sqlite",
  "database": "./src/database/database.sqlite",
  "migrations": [process.env.TYPEORM_MIGRATIONS],
  "entities": [process.env.TYPEORM_ENTITIES],
  "logging": true,
  "cli": {
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR
  }
}