const mongoose = require('mongoose');

const dbConnect = () =>{
    mongoose.connect('mongodb+srv://BodarDakshit:dakshit3011@cluster0.jilqa1w.mongodb.net/Exam')
    .then(() => console.log('Data Base Connected'))
    .catch(err => console.log(err))
}

module.exports = dbConnect;