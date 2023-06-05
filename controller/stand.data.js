const express=require("express"); 
const stand=require("../model/stand.model")



const standroute=express.Router();   


standroute.get('/standget/:id' ,async (req,res,next)=>{ 
try{  
    let {id}=req.params
    

 const finditem=await stand.findOne({id:id}) ;
 res.status(200).json({msg:finditem});
    
}catch(error){
res.status(400).json({error:error});}
})   



standroute.post('/standpost',async(req,res,next)=>{ 
    try{   
        const{stand1='',stand2="", id=''}=req.body;
    const oness= new stand({stand1,stand2,id});
        if(oness){
       await oness.save(); 
       res.status(200).json({msg:"sucess"}); 
        }else{ 
            res.status(401).json({msg:'enter email and password'})
        }
    
    }catch(error){ 
        res.status(400).send({error:error}); 
        console.log(error)
    }
    })    






    standroute.patch('/standpatch',async(req,res,next)=>{ 
        try{ 
           // const {venue,team}=req.body
       const findone= await stand.findOne({_id:req.body._id}); 
       
          
    const updateone   =await findone.updateOne({stand1:req.body.stand1,stand2:req.body.stand2,update:Date.now()})
            res.status(200).json({msg:updateone}); 
        
        }catch(error){ 
            res.status(400).json({error:error}); 
            console.log(error)
        }
        })   




        standroute.delete('/standdelete',async(req,res,next)=>{ 
            try{ 
                
           const findone= await stand.findOne({_id:req.body._id}); 
           if(findone){
        await findone.deleteOne();
                res.status(200).json({msg:'delete sucess'}); 
           }else{res.status(401).send({msg:"no data match"})}
            }catch(error){ 
                res.status(400).send({error:error}) 
                console.log(error)
            }
            })  

module.exports=standroute;