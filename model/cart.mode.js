const mongoose=require('mongoose'); 


const cart=mongoose.Schema({ 
    Id:{ 
        type:mongoose.Schema.Types.ObjectId,
        required:false
        },    Ids:{ 
            type:mongoose.Schema.Types.ObjectId,
            required:false
            },   
         
       
            team:{ 
                type:String,
                required:false
                },   
                venue:{ 
                    type:String,
                    required:false
                    },   
                    stand:{ 
                        type:String,
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