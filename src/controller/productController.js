const productModel = require('../model/productModel');

module.exports.createProduct = async (req , res)=>{
try{
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
}catch(err) {
    return res.status(500).send({
        message : 'internal server error' 
    })
}
}

module.exports.getProduct = async function(req , res){
    let getData = await productModel.find()
    if(getData.length > 0) {
        return res.status(200).send({
            status : true,
            data: getData
        })
    }
}

module.exports.getProductById = async function(req , res) {
    let productId = req.params.productId
    let getData = await productModel.findById(productId)
    return res.status(200).send({
        status : true,
        data: getData
    })
}

module.exports.updateProduct = async function(req , res){
    let { product_name, product_type, product_price } = req.body;
    let productId = req.params.productId;
    let updateData = await productModel.findByIdAndUpdate({ _id: productId }, { product_name, product_type, product_price } , {new : true});
    if (updateData) {
        return res.status(200).send({
            status : true,
            data: updateData
        })
    }else{
        return res.status(400).send({
            status : false,
            message : "data updation failed"
        })
    }
}

module.exports.deleteProduct = async function(req , res){
    let productId = req.params.productId;
    let deleteData = await productModel.findByIdAndDelete({ _id: productId })
    if (deleteData) {
        return res.status(200).send({
            status : true,
            message : 'data deleted succesfully'
        })
    }else{
        return res.status(400).send({
            status : false,
            message : 'failed to update data'
        })
    }
}