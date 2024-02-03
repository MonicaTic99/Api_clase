const express = require('express');
const router = express.Router();

module.exports = function(){
    router.get('/',(req,res)=>{
        res.send(`estamos en raiz`);
    }
        );
    
        router.get('/nosotros',(req,res)=>{
            res.send(`estamos en nosotros, archivo diferente`);
        }
            );
            module.exports = router;

            return router;
}