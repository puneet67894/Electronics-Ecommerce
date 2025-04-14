const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const sequelize = require('./configs/database');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json()); // For parsing JSON

// Test database connection
sequelize.sync();

// RESTful routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API is running 🚀');
  });
  
  

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
    console.log('Server running at http://localhost:4000');
});