const {
    database
} = require("./data.js")

//removed the const materials, moved it to the database const under the materials array.
const meals = []


//looks at the firstIngredient and compares it to materials array
//loo at the secondIngredient and compare it to the materials array
//if the two ingredients make a recipe, push the recipe name
/* rewriting into own function
const cook = (firstIngredient, secondIngredient) => {
    if (firstIngredient === 'Hylian Rice' && secondIngredient === 'Big Hearty Radish') {
        meals.push('Mushroom Rice Balls')
    }
}*/


const cook = (firstIngredient, secondIngredient, thirdIngredient = null, fourthIngredient=null) => { //used pre-defined parameters so that recipes calling for only two ingredients would work.
    for (const recipe of database.recipes) {
        let firstIngCheck = firstIngredient === recipe.ingOne || firstIngredient === recipe.ingTwo || firstIngredient === recipe.ingThree || firstIngredient === recipe.ingFour

        let secondIngCheck = secondIngredient === recipe.ingOne || secondIngredient === recipe.ingTwo || secondIngredient === recipe.ingThree || secondIngredient === recipe.ingFour

        let thirdIngCheck = thirdIngredient === recipe.ingOne || thirdIngredient === recipe.ingTwo || thirdIngredient === recipe.ingThree || thirdIngredient === recipe.ingFour

        let fourthIngCheck = fourthIngredient === recipe.ingOne || fourthIngredient === recipe.ingTwo || fourthIngredient === recipe.ingThree || fourthIngredient === recipe.ingFour
        
        if(firstIngCheck && secondIngCheck) {
            let dishName = recipe.rName
            meals.push(dishName)
        }
        if (thirdIngredient && firstIngCheck && secondIngCheck && thirdIngCheck) {
            let dishName = recipe.rName
            meals.push(dishName)
        }
        if (fourthIngredient && firstIngCheck && secondIngCheck && thirdIngCheck && fourthIngCheck){
            let dishName = recipe.rName
            meals.push(dishName) 
        }
    }//just a thought but, what kind of loop could I use to do this? It's lots of repetitive logic 
}

cook(database.materials[7].matName, database.materials[8].matName, database.materials[6].matName) //".matName" is needed to access the materials relevant name property. 

console.log('MEALS:')
console.log('---------------')
for (const meal of meals) {
    console.log(meal)
}


