const {check,validationResult, checkExact}=require('express-validator');

const validatingInput=[
   check('id').isNumeric().withMessage("role must contain alphabetic character"),
   (req,res,next)=>{
    const errors=validationResult(req);
    if(!errors){
        return res.json({errors:"error occurred"})
    }
   }
]
module.exports=validatingInput