const express= require('express')


const router = express.Router();

router.get('/', (req,res) =>{
    res.send('task routes are working');
});

//CRUD

module.exports = router;