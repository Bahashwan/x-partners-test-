require('dotenv').config();

const mongoose = require('mongoose')

const dbConfig=()=>{

    mongoose.connect(process.env.MONGODB_URL, {});
    const connect = mongoose.connection;
    connect.on('connected', () => {
        console.log('DB connected');
    });
    connect.on('disconnected', () => {
        console.log('DB disconnected');
    });
    connect.on('error', (err) => {
        console.log('DB error:', err);
    });
}

module.exports = dbConfig