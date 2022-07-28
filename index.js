const characters = [
    {
        name: "Daenerys Targaryen",
        show: "Game of Thrones",
        seasons: 8
    },
    {
        name: "Dolores Abarnathy",
        show: "West World",
        seasons: 4
    },
    {
        name: "Don Draper",
        show: "Mad Men",
        seasons: 7
    },
    {
        name: "Thomas Shelby",
        show: "Peaky Blinders",
        seasons: 6
    },
    {
        name: "Rick Sanchez",
        show: "Rick & Morty",
        seasons: 4
    },
    {
        name: "Jeff Probst",
        show: "Survivor",
        seasons: 43
    },
    {
        name: "Charlotte Hale",
        show: "West World",
        seasons: 4
    }
]

// All of these methods take a callback function as an argument
// A callback function is a function that is passed to another function as an argument
// Example:
// characters.map( () => {} )

// forEach()
// This method will replace a regular for loop to iterate over an array and modify it(if you want) or not.

// The callback function's first argument will represent each element as we iterate through the array
// characters.forEach((char) => {
//     console.log(char.name)
// })


// We can also modify each element in the array by using the second argument in the forEach()
// char is representing the entire single element as we iterate though 
// i is the index of each element as we iterate through 

// Example of regular for loop where we console log both the index and the element
// for (let i = 0; i < characters.length; i++) {
//     console.log(i)
//     console.log(characters[i])
// }

// characters.forEach( (char, i) => {
//     if(char.name === "Don Draper"){
//         characters[i] = "something else"
//     }
// } )
// console.log(characters)



// map()
// This method will create a new array of elements based on what the callback function returns as we iterate over each element
const addRealKey = characters.map((char) => {
    // char.real = false
    // if(char.name === "Jeff Probst"){
    //     char.real = true
    // }

    char.name === "Jeff Probst" ? char.real = true : char.real = false

    char.cartoon = false
    if(char.name === "Rick Sanchez"){
        char.cartoon = true 
    }
    
    return char
})

// console.log(addRealKey)

// const nums = [12, 15, -15, 10, 100, 63, 2, 6, -3]


// This will return an array with elements that are undefined bc it returns a value for each element
// const higherThan10 = nums.map((num) => {
//     if(num > 10){
//         return num
//     }
// })

// Only returns the numbers that match the condition (num > 10)
// const higherThan10 = nums.filter((num) => {
//     return num > 10
// })

// console.log(higherThan10)



// filter()
// Will return a new array that "filters" the array for any element that matches the condition we are looking for
const moreThan5Seasons = characters.filter( (char) => {
    return char.seasons > 5 || char.show === "West World"
} )

// Fancy version: when a an arrow function can be expressed in only one line, we can drop the {}, and the return keyword is implied (whatever comes after the arrow is implied to be returned)

// We can filter for a single condition, or multiple
// const moreThan5Seasons = characters.filter( (char) => char.seasons > 5 )
// const moreThan5Seasons = characters.filter( (char) => char.seasons > 5 || char.show === "West World")

// console.log(moreThan5Seasons)


const liveAction = addRealKey.filter( (char) => {
    return char.cartoon === false
} )

// console.log(liveAction)

// every()
// Will return a boolean based on whether ALL of the elements match the condition we provide, or not

// Returns true since ALL are not cartoons
// const allAreNotCartoons = liveAction.every( (char) => {
//     return char.cartoon === false
// } )


// Called on addRealKey where some are cartoons => returns false
// Example also destructures.
const allAreNotCartoons = addRealKey.every( ( { cartoon } ) => {
    return cartoon === false
} )

// console.log(allAreNotCartoons)


// some()
// Will return a boolean if at least ONE of the elements match the condition we provide, or not
const someAreCartoons = addRealKey.some( (char) => {
    return char.cartoon === true
} )

// console.log(someAreCartoons)


// find()
// Returns a single element in the array, in our case an object
// Will help us "find" the FIRST element that matches the condition we provided. Similar to a filter but will only return one element
const thomas = characters.find( (char) => {
    return char.name === "Thomas Shelby"
} )

// Concise version, where return is implied
// const thomas = characters.find( (char) => char.name === "Thomas Shelby")


// Destructuring the char passed to the callback function, in which we only grab the "name" key
// const charlotte = characters.find(( { name } ) => name === "Charlotte Hale")

// console.log(charlotte)


// const nums = [12, 15, -15, 10, 100, 63, 2, 6, -3]

// const foundNum = nums.find((num) => num === 87)
// console.log(foundNum)