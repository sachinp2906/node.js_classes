const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name : {
        type : String
    },
    product_type : {
        type : String
    },
    product_price : {
        type : Number
    }
},{timestamps : true})

module.exports = mongoose.model('product_data' , productSchema);