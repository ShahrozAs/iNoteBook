const mongoose = require("mongoose");

module.exports = async function connection() {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect("mongodb://127.0.0.1:27017/", connectionParams);
    console.log("connected to database.");
  } catch (error) {
    console.log(error, "could not connect to database.");
  }
};
// const mongoose=require('mongoose');
// const mongoUrl="mongodb://127.0.0.1:27017/"

// const connectToMongo=async()=>{
//     mongoose.connect(mongoUrl,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
//                console.log("we are connected");
//                })
//                .catch((err) => console.log(err));
// }

// module.exports=connectToMongo;

// const mongoose=require('mongoose');
// const mongoUrl="mongodb://localhost:27017/"
// const connectToMongo=()=>{
//     mongoose.connect(mongoUrl,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
//         console.log("we are connected");
//       })
//       .catch((err) => console.log(err));
// }
// module.exports=connectToMongo;

// const mongoose=require('mongoose');
// const mongoUrl="mongodb://localhost:27017/"
// const connectToMongo=()=>{
//     mongoose.connect(mongoUrl,()=>{
//         console.log("connected to mongo Successfully");
//     });
// }
// module.exports=connectToMongo;

// const mongoose = require('mongoose')
// const connectDB = async () => {
//     try {
//         mongoose.connect("mongodb://localhost:27017/")
//         console.log('Mongo connected')
//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }
// module.exports = connectDB
