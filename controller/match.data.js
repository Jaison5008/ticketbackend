const express=require("express"); 
const match=require("../model/match.model")



const matchroute=express.Router();   


matchroute.get('/matchget',async (req,res)=>{ 
try{   
    

    const findone= await match.find(); 
    res.status(200).json({msg:findone}); 

}catch(error){ 
    res.status(500).json({error:error}); 
    console.log(error)
}
})   



matchroute.post('/matchpost',async(req,res,next)=>{  
    try{   
        const{
    team='',
    
     venue="",
     
     
     
     }=req.body
    const oness= new match({team,venue});
        if(oness){
       await oness.save(); 
       res.status(200).json({msg:"sucess"}); 
        }else{ 
            res.status(401).json({msg:'enter email and password'})
        }
    
    }catch(error){ 
        res.status(500).send({error:error}); 
        console.log(error)
    }
    })    






    matchroute.patch('/matchpatch',async(req,res,next)=>{ 
        try{ 
           // const {venue,team}=req.body
       const findone= await match.findOne({_id:req.body._id}); 
       
          
    const updateone   =await findone.updateOne({team:req.body.team,venue:req.body.venue,update:Date.now()})
            res.status(200).json({msg:updateone}); 
        
        }catch(error){ 
            res.status(500).json({error:error}); 
            console.log(error)
        }
        })   




        matchroute.delete('/matchdelete',async(req,res,next)=>{ 
            try{ 
                
           const findone= await ones.findOne({_id:req.body._id}); 
           if(findone){
        await findone.deleteOne();
                res.status(200).json({msg:'delete sucess'}); 
           }else{res.status(401).send({msg:"no data match"})}
            }catch(error){ 
                res.status(500).send({error:error}) 
                console.log(error)
            }
            })  

module.exports=matchroute;