const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})




// const task = new Task({
//     description:"Do laundry             ",
 
// })
// task.save().then(() =>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error);
    
// })

// const me = new User({
//    name:'Gopi Krishna       ',
//    email:'GopiManchu1@gmail.com',
//    password:'123$',
//    age:20
   
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error) =>{
//     console.log(error)
// });