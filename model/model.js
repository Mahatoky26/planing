import sequelize from "sequelize";
import db from '../db/db.js';
const {DataTypes} = sequelize;

const planing = db.define('planing',{
    Idmed: {
        type : DataTypes.INTEGER,
        allowNull:false,
    },
    cabinet:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    horaire: {
        type : DataTypes.STRING,
        allowNull:false,
    },
    jour: {
        type : DataTypes.STRING,
        allowNull:false,
    },
    date: {
        type : DataTypes.DATE,
        allowNull:false,
    },
});
const conger = db.define('conger',{
    Idmed: {
        type : DataTypes.INTEGER,
        allowNull:false,
    },
    motif: {
        type : DataTypes.STRING,
        allowNull:false,
    },
    debut: {
        type : DataTypes.DATE,
        allowNull:false,
    },
    fin: {
        type : DataTypes.DATE,
        allowNull:false,
    }
});


export { planing , conger};