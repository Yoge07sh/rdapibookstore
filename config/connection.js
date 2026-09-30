const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/reactcrud2026');
        console.log('database connected successfully...');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connect;