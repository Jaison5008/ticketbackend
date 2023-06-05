const mongoose=require('mongoose'); 


const match=mongoose.Schema({ 

team:{ 
type:String, 
required:true
}, 
venue:{ 
    type:String, 
    required:true
},  

create:{ 
type:Date, 
default:Date.now() 
}, 
update:{ 
    type:Date, 
    default:Date.now()
}
}) 
module.exports=mongoose.model('match',match)