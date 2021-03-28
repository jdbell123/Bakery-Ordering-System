const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Orders extends Model { }

Orders.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'customer',
                key: 'id',
            },
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },

        pickup_date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: true
            },
        },

        pickup_time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: true
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'orders',
    });

module.exports = Orders;
