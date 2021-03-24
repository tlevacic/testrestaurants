const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
const cors = require('cors');

//Step 1
const app = express();
const PORT = process.env.PORT || 5000;

const routes = require('./routes/restaurantRoute');


//Step 2
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('MongoDB connection SUCCESS');
});


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());

//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
