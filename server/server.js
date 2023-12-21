const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dbConfig = require('./config/dbConfig')
const router = require('./config/routesConfig')
const cors = require('cors');


const app = express();


dbConfig()

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
// API routes
app.use('/', router)

//  static files from public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is working on the port: ${PORT}`));