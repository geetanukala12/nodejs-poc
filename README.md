# Node JS Migrations

Install sequelize:
npm install --save sequelize

Install mysql
npm install --save mysql2

To create migrations and seeders:
sequelize init

To init migrations
sequelize init:migrations

To init migrations
sequelize init:seeders

To create a model:
Example: Role model
Attributes : role
sequelize model:create --name roles --attributes "role:STRING(50)"

To run migrations:
sequelize db:migrate

To run perticular migration file:
sequelize db:migrate 20171106085830-user.js up
sequelize db:migrate 20171106085830-user.js down

To Undo migrations:
sequelize db:migrate:undo:all

To Create Seeds:
sequelize seed:generate --name NAMEOFSEED

Run Migrations:
sequelize db:seed:all

To Revert Seeds:
sequelize db:seed:undo:all