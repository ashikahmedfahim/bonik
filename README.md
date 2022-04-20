<p align="center">copy the content of .env_back file and paste it into .env(create it)</p>
<p align="center">.env should be in the same directory as app.js</p>
<p align="center">DATABASE name must be "bonik"</p>
<p align="center">Use your postgres user name and password</p>
<hr>
<p align="center">create a new database named "bonik" in postgresql</p>
<p align="center">then create a schema named "general"</p>
<hr>
<p align="center">after this go to order.js in the model directory and remove comment out the line that says</p>

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
<p align="center">now the API is ready to be used</p>
