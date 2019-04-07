release: node_modules/.bin/sequelize db:migrate && node_modules/.bin/sequelize sdb:seed:undo:all && node_modules/.bin/sequelize db:seed:all
web: node server.js