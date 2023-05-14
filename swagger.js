const express = require('express');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'movies',
      version: '1.0.0',
      description: 'list of movies'
    },
    servers: [
      {
        url: 'http://localhost:8081/api/movies'
      }
    ]
  },
  apis: ['./routes/*']
};

const specs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })
  



