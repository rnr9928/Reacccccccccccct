// 설치해야할것
// sequelize  , mysql2 

const Sequelize = require('sequelize');
const config = require('../config');
const user = require('./user');
const {database, username,password} = config.dev;
const sequelize = new Sequelize(database,username,password,config.dev);

const db= {};
db.sequelize = sequelize;
db.user = user;

user.init(sequelize);

module.exports = db;