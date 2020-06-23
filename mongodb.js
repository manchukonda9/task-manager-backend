//CRUD operations 


const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
// const ObjectID =mongodb.ObjectID
const id = new ObjectID()
console.log(id);
console.log(id.getTimestamp())
MongoClient.connect(connectionURL,{useNewUrlParser :true}, (error,client) =>{
    if(error){
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)
    // const updatePromise =db.collection('users').updateOne({
    //     _id:new ObjectID('5ee93bed4fc7a095357a4975')
    // },{
    //     $set:{
    //         name:'Manchu'
    //     }
    // })
    // updatePromise.then((result)=>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    // const updateManyPromise = db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }

    // })

    // updateManyPromise.then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })
    // db.collection('users').findOne({_id:new ObjectID('5ee94e421337f899526c22f1')},(error,user) =>{
    //     if(error){
    //         return console.log("user not found")
    //     }
    //     console.log("user details:")
    //     console.log(user)
    // })

    // db.collection('users').find({age:23}).toArray((error,users) =>{
    //     console.log(users)
    // })

    // db.collection('users').find({age:23}).count((error,count) =>{
    //     console.log(count)
    // })


    

    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'Vikram',
    //     age: 23
    // },(error,result) =>{
    //     if(error){
    //         return console.log('unable to insert user')
    //     }
    //     console.log(result.ops);
    // })
    // db.collection('users').insertMany([
    //     {
    //         name:'Ben',
    //         age:10
    //     },
    //     {
    //         name:'Gwen',
    //         age:10
    //     }
    // ],(error,result) =>{
    //     if(error){
    //         return console.log("Unable to insert documents")
    //     }
    //     console.log(result.ops)
    // })
//     db.collection('tasks').insertMany([
//         {
//             description:'Do laundry',
//             completed:false
//     },
//     {
//         description:'Do dishes',
//         completed:false
// },
// {
//     description:'Do breakfast',
//     completed:true
// }

// ],(error,result) =>{
//     if(error){
//         return console.log('Unable to insert documentes')
//     }
//     console.log(result.ops)
// })



// db.collection('users').deleteMany({
//     age:10
// }).then((result) =>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })


db.collection('tasks').deleteOne({
    _id:new ObjectID('5ee93f862a9cf0970f457105')
}).then((result) =>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

})

