require('../src/db/mongoose')

const Task = require('../src/models/task')
// const _id = '5e5e1af0fa29361efb6f5329'
// Task.findByIdAndDelete(_id).then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((total) => {
//     console.log(total)
// }).catch((e) => {
//     console.log(e)
// })

const deleteByIdAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    return await Task.countDocuments({ completed: false })
}

deleteByIdAndCount('5e5f3388e34d5b16438e8a6b').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})