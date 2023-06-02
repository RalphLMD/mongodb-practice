const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/fruitsDB')

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your data entry, no input"],
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String,
})

const Fruit = mongoose.model("Fruit", fruitSchema)

// const fruit = new Fruit({
//     name: "Indian Mango",
//     rating: 10,
//     review: "It is green."
// })

// //fruit.save()

// INSERT

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "It is green but not an apple."
// })

// const banana = new Fruit({
//     name: "Banana",
//     rating: 10,
//     review: "It is yellow."
// })

// const mango = new Fruit({
//     name: "Mango",
//     rating: 10,
//     review: "It is yellow also."
// })

// Fruit.insertMany([kiwi, banana, mango]).then(function(){    
//     console.log("Successfully added in database.")
// }).catch(function(err){
//     console.log(err)
// })  



// UPDATE 

// Fruit.updateOne({_id: "646c5a38ee784754dc744956"}, {name: "Peach"}).then(function(){    
//     console.log("Successfully updated in database.")
// }).catch(function(err){
//     console.log(err)
// })  

// DELETE
// Fruit.deleteMany({name: "Pineapple"}).then(function(){
//     console.log("Successfully deleted in database.")
// }).catch(function(err){
//     console.log(err)
// })

const pineapple = new Fruit({
    name: "Pineapple",
    score: 7,
    review: "it is yellow"
})

// pineapple.save()

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
})

const Person = mongoose.model("Person", personSchema)

const person = new Person({
    name: "Ralph",
    age: 23,
    favoriteFruit: pineapple
})

// person.save()

// Person.deleteMany({name: "Ralph"}).then(function(){
//     console.log("Successfully deleted in database.")
// }).catch(function(err){
//     console.log(err)
// })


async function myfruits() {
    const fruits = await Fruit.find({});
    fruits.forEach(function(fruit){
        console.log(fruit);
    });
}

async function myPeople() {
    const people = await Person.find({});
    people.forEach(function(person){
        console.log(person);
    });
}

//myfruits()
myPeople()