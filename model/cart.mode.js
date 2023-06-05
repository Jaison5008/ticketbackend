const mongoose=require('mongoose'); 


const cart=mongoose.Schema({ 

userId:{ 
type:mongoose.Schema.Types.ObjectId,
required:true
},  
matchId:{ 
    type:mongoose.Schema.Types.ObjectId,
    required:false
    },  
    standId:{ 
        type:mongoose.Schema.Types.ObjectId,
        required:false
        }, 
Ticketcount:{ 
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
module.exports=mongoose.model('cart',cart)