const mongoose = require('mongoose')

const dbconnect = () => {
<<<<<<< HEAD
   mongoose.connect('mongodb://127.0.0.1:27017/admin-panel-session')
=======
    mongoose.connect('mongodb+srv://urviginoya:urvisha@cluster0.xygsjty.mongodb.net/adminpanel')
>>>>>>> c491e308721735c15350e37ac4971dd76c06cc61
        .then(() => console.log('DB is Connected !!!'))
        .catch((error) => console.log(error))
}

module.exports = dbconnect;

