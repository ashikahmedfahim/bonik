copy the content of .env_back and paste it into .env
.env should be in the same directory as app.js
DATABASE name must be "bonik"

create a new database named "bonik" in postgresql
then create a schema named "general"

after this go to order model and remove comment out the line that says

<pre>
 const createTable = async () => {
  try {
    await sequelize.sync({ alter: true });
   } catch (error) {
     console.log(error);
  }
 };
 createTable();
 </pre>

<p align="center">run "node app.js"</p>
<p align="center">this will create the table for you</p>
<p align="center">and again comment out these lines and restart the server using "node app.js"</p>
