const express = require('express');
const router = express.Router();

const TransactionDetailSchema =  require('../../models/transactionDetailsModel');

//GET Request : get data from DB
router.get('/',(req,res) =>{
    TransactionDetailSchema.find()
    .then(items =>res.json(items))
});

//POST request
router.post('/',(req,res) =>{
   const newtransactionObj = new TransactionDetailSchema({
    userName:req.body.userName,
    paymentMode:req.body.paymentMode,
    amount: req.body.amount
   });
   console.log(newtransactionObj)
   newtransactionObj.save().then(data =>{
    console.log(data)   
    res.json(data)});
});

module.exports = router;