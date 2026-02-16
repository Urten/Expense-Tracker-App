const { Sequelize } = require('sequelize');
require('dotenv').config();


const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbHost = process.env.DB_HOST




const sequelize = new Sequelize(dbName, dbUser,dbPass,{
  host: dbHost,
  dialect: "mysql"
});

async function init_db() {
    try {
      await sequelize.authenticate();
      console.log('Database connected');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }

}



module.exports = { init_db, sequelize };
