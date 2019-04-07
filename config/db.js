var Sequelize = require('sequelize')

db_url = process.env.DATABASE_URL

let sequelize


if (db_url) {
    sequelize = new Sequelize(db_url,
    { 
        dialect: 'postgres', 
    })

    sequelize.authenticate().then(()=> console.log('connected to Postgres'))
}

else {
     sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './local.sqlite3'
    })

    sequelize.authenticate().then(() => console.log('connected to sqlite'))

}



module.exports = sequelize
