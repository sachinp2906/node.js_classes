const productModel = require('../model/productModel');

module.exports.createProduct = async (req , res)=>{
    const data = req.body;
    console.log(data);
    const addProduct = await productModel.create(data);
    if(addProduct) {
        return res.status(201).send({
            message : "data created successfully",
            data: addProduct
        })
    }else{
        return res.status(400).send({
            message : "error creating data"
        })
    }
}
