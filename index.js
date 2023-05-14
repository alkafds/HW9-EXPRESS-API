const express = require('express');
const morgan = require('morgan');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const PORT = 8081 || process.env.PORT;
const userController = require('./controller/user.controller')
const movieController = require('./controller/movie.controller')
const authenticationController = require('./controller/authentication.controller')
require('dotenv').config();



app.use(express.json())
app.use(morgan('combined'))
app.use(authenticationController)
app.use(userController)
app.use(movieController)




app.get('/ping', (req, res) => {
  res.json({ping: true})
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

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
        url: 'http://localhost:8081'
      }
    ]
  },
  apis: ['./routes/*']
};

const specs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
