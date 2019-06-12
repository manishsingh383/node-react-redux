const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionDetailSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    paymentMode:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    } 
});

module.exports = BookItem = mongoose.model('transactionDetail',TransactionDetailSchema);

