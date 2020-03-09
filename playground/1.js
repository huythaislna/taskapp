require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5c1a5a34d5a2ec046ca8f6bc', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount =async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    console.log(user)
    const count = User.countDocuments({ age })
    return count
}

updateAgeAndCount('5e5e23262302f4221fc56d28', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})