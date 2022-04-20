copy the content of  .env_back and paste it into .env
.env should be in the same directory as app.js
DATABASE name must be "bonik"

create a new database named "bonik" in postgresql
then create a schema named "general"

after this go to order model and remove comment out the line that says

// const createTable = async () => {
//   try {
//     await sequelize.sync({ alter: true });
//   } catch (error) {
//     console.log(error);
//   }
// };

// createTable();

run "node app.js"
this will create the table for you 
and again comment out these lines and restart the server using "node app.js"







