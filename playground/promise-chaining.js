require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')


//5eea472a9f2a0cd557821b77
// User.findByIdAndUpdate('5eea472a9f2a0cd557821b77',{age:1}).then((user) =>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) =>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async (id,age) =>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5eea472a9f2a0cd557821b77',2).then((count) =>{
    console.log(count)
}).catch((e) =>{
    console.log(e)
})
