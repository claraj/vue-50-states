## 50 States 

https://fifty-states-visited.herokuapp.com/#/


For development, run server with 

`npm install`

`npm start`

From client directory, run dev server for client

`npm install`

`npm run serve`

App at http://127.0.0.1:8080


### sequelite command line 

- start project 
`sequelize init` 

- Create models 
`sequelize model:generate --name States --attributes name:string,visited:boolean,lat:float,lon:float,zoom:integer`

Add --force to overwrite model

- Migrate 
`sequelize db:migrate`

- run seeds 
`sequelize db:seed:all`
- remove all seeds 
`sequelize db:seed:undo:all`

http://docs.sequelizejs.com/manual/migrations.html#creating-first-model--and-migration-

### Resources 

Map header image from Chris Lawton via Unsplash
https://unsplash.com/photos/KpBXAOs80YI

Map Icon from Icon8
https://icons8.com/icon/43632/map

List of the geographic centers of each state from Wikipedia
https://en.wikipedia.org/wiki/List_of_geographic_centers_of_the_United_States
