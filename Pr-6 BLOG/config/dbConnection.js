const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect("mongodb+srv://urviginoya:urvisha@cluster0.xygsjty.mongodb.net/BLOG")
        .then(() => console.log('DB is Conected!!!'))
        .catch((err) => console.log(err));
}
module.exports = dbConnect;