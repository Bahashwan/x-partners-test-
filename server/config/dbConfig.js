const mongoose = require('mongoose')

const dbConfig=()=>{

    mongoose.connect('mongodb://127.0.0.1:27017/auth', {});
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