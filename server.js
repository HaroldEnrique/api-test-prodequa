const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Middlewares
// app.use('/', ()=> {
//     console.log('this is a middleware running');
// });
app.use(cors());
app.use(express.json());

// Import Routes
const inquiryRoutes = require('./routes/inquiries');
app.use('/inquiries', inquiryRoutes);


// Routes

app.get('/', (req, res) => {
    res.send('Welcome! This is a Testing API')
});

// Connect to DB
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => console.log('Connected to DB'));


// Listening to the server

app.listen(3000, () => console.log('server started'));