module.exports = (sequelize, DataTypes) => {

    var State = sequelize.define('State', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        visited: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false 
        },
        lat: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        lon: {
            type: DataTypes.FLOAT,
            allowNull: false,
           
        },
        zoom: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 5    
        }
    })

    return State
}

