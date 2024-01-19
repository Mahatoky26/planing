import { Sequelize } from "sequelize";

export default new Sequelize('planing','root','josia', {dialect: 'mysql', host: 'localhost'});