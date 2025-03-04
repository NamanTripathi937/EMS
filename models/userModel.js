const mongoose = require('mongoose');
const findOrCreate = require("mongoose-findorcreate");



//schema design
const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true, sparse: true },
      name:{
        type:String,
        required:[true,'name is required']
      },
      email:{
        type:String,
        required:[true,'email is required and should be unique'],
        unique:true
      },
      password:{
        type: String,
      }
},
 {timestamps:true}
);
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);
//export
module.exports = User;
const userModel = mongoose.model('users',userSchema)
module.exports = userModel