
const mongoose = require('mongoose')
// require("dotenv").config()
// module.exports = () => {
//  mongoose.connect(
//     process.env.DATABASE, {useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true}
    
//   )
// }
mongoose.connect('mongodb://127.0.0.1:27017/word23')
  .then(() => console.log('Connected!'));
