const mongoose=require('mongoose'); 


const stand=mongoose.Schema({ 

stand1 :{ 
type:String, 
required:true
}, 
stand2:{ 
    type:String, 
    required:true
},  
id:{ 
    type:mongoose.Schema.Types.ObjectId,
    required:true
} ,

create:{ 
type:Date, 
default:Date.now() 
}, 
update:{ 
    type:Date, 
    default:Date.now()
}
}) 
module.exports=mongoose.model('stand',stand)