const express=require("express"); 
const cart=require("../model/cart.mode"); 
const cartroute=express.Router();   

  

cartroute.get('/cartget',async (req,res)=>{ 
try{   
  
   
    const findone= await cart.find(); 
    res.status(200).json({msg:findone}); 

}catch(error){ 
    res.status(500).json({error:error}); 
    console.log(error)
}
})   
 
cartroute.post('/cartpost',async(req,res)=>{   
   
   console.log(req.body)
    try{   
        const{
    Ticketcount='',
    
     
     
     
     
     }=req.body
    const oness= new cart({Ticketcount,userId:req.body.id});
        if(oness){
       await oness.save(); 
       res.status(200).json({msg:"Ticket booking sucess"}); 
        }else{ 
            res.status(401).json({msg:'enter email and password'})
        }
    
    }catch(error){ 
        res.status(500).send({error:error}); 
        console.log(error)
    }
    })    






    cartroute.patch('/cartpatch',async(req,res,next)=>{ 
        try{ 
            //const {venue,team}=req.body
       const findone= await match.findOne({_id:req.body._id}); 
       
          
    const updateone   =await findone.updateOne({Ticketcount:req.body.Ticketcount,update:Date.now()})
            res.status(200).json({msg:updateone}); 
        
        }catch(error){ 
            res.status(500).json({error:error}); 
            console.log(error)
        }
        })   




        cartroute.delete('/cartdelete',async(req,res,next)=>{ 
            try{ 
                
           const findone= await cart.findOne({_id:req.body._id}); 
           if(findone){
        await findone.deleteOne();
                res.status(200).json({msg:'delete sucess'}); 
           }else{res.status(401).send({msg:"no data match"})}
            }catch(error){ 
                res.status(500).send({error:error}) 
                console.log(error)
            }
            })  

module.exports=cartroute
