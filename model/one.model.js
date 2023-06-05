const mongoose=require('mongoose'); 


const one=mongoose.Schema({ 

email:{ 
type:String, 
required:true
}, 
password:{ 
    type:String, 
    required:true
}, phone:{ 
    type:String, 
    required:false
},
create:{ 
type:Date, 
default:Date.now() 
},update:{ 
    type:Date, 
    default:Date.now()
}



}) 
module.exports=mongoose.model('one',one)