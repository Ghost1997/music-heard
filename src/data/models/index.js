import Sequelize from 'sequelize';
import config from 'config';
const pg = require('pg');

// https://github.com/sequelize/sequelize/issues/4550
pg.defaults.parseInt8 = true;

import { artistsModel } from './artists.model';
import { userModel } from './users.model';

const sequelize = new Sequelize(config.database, config.username, config.password, {
  ...config,
});

artistsModel(sequelize);
userModel(sequelize);

const { Artists } = sequelize.models;
const { Users } = sequelize.models;

if (process.env.NODE_ENV !== 'test' && !process.env.USE_MIGRATIONS) {
  sequelize.sync({ alter: true });
}

export { sequelize, Artists, Users };
