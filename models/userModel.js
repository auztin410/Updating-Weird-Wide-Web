var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  
  username: {
    type: String,
    trim: true,
    required: "A Username is required!"
  },

  password: {
    type: String,
    trim: true,
    required: "You need a Password!",
    validate: [
     
     function(input) {
       
       return input.length >= 6;
     },
     
     "password needs to be over 6 characters long."
   ]
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    // unique: true
  },
  // googleId: {
  //   type: String
  // },
  weirdScore: {
    type: Number
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre("save", function(next) {
  this.hashPassword();

  next();
});

UserSchema.methods.hashPassword = function(){
  if(!this.password) return;
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
}

UserSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password);
}

var User = mongoose.model("User", UserSchema);


module.exports = User;