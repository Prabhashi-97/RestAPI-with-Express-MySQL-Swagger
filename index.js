const express = require("express");
const bodyParser = require("body-parser");
const swaggerJsdoc = require ("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(bodyParser.json());

//Swagger Initialization
const swaggerOptions = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: 'my-posts',
      description: 'API Documentation',
      contact:{
        name:'Developer',
      },
      servers:['http://localhost:3000/'],
    },
  }),
  apis: ["index.js",'./routes/*.js'], // Path to the API routes
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const usersRoutes = require("./routes/users.route");
app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("I am ready to listen you"); //when server is started this anonymous fuction will call.
});
