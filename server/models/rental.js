const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const rentalSchema=new Schema({
    title:{type:String,required:true,max:[128,'Too long, max is 128 characters']},
    city:{required:true,type:String, lowercase:true},
    street:{type:String,required:true, min:[4,'Too short, min is 4 chars']},
    category:{required:true,type:String, lowercase:true},
    image:{required:true,type:String},
    bedroom:Number,
    shared:Boolean,
    description:{required:true,type:String,},
    dailyRate:Number,
    createdAt:{type:Date,default:Date.now}
});


module.exports=mongoose.model('Rental',rentalSchema);