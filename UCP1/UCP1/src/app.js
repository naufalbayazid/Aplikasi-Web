const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const patientRoutes = require('./routes/patientRoutes');

const app = express();
const port = 3000;

// Setup EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', patientRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
