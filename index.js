const express = require('express');
const mongoose = require('mongoose');
const app = express();
const route = require('./src/routes/productRoute')

app.use(express.json());

mongoose.connect('mongodb+srv://sachinfu:2906@sachinfu.fcpe6tc.mongodb.net/dummy-db-class' , {
    useNewUrlParser : true
})
.then(()=>console.log('connected with database'))
.catch(err=>console.log(err.message));

// app.use('/home' , (req ,res)=>{
//     return res.send('hello world')
// })

app.use('/' , route)

app.listen(3000 , ()=>{
    console.log('server running on port 3000')
})

