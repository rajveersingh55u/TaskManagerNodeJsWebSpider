const mongoose = require('mongoose');
const bcrypt= require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{type:String, require: true},
    email:{type:String, require: true, unique: true},
    password:{type:String, require:true}
});
userSchema.pre('save', async function(next){
    const user = this;

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

const User = mongoose.model('User', userSchema);
module.exports = User;