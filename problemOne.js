


// Oh no, it's the zombie apocalypse and your town is being attacked by hordes of undead creatures! You need to create a fence that will keep them out. Luckily for you, you're an Tony Stark-level genius who has a robot that can do exactly what you ask of it. We just need to ask it with the correct wording...
// Write a function called buildFenceCommand that takes in 2 parameters. The first should be called numOfFencePosts, and the second should be called fencePostMaterial. You can expect that the first parameter's argument value will always be a positive integer, and the second parameter's argument value will always be a string representing a type of build material (i.e. iron, wood, etc.).
// Your function should log a string to the console that matches this format: "JARVIS is now building X fence post number ____", where the X represents the build material of the fence post, and the blank represents the current fence post number being built.
// Hint: Consider what type of JavaScript code will allow you to do something over and over again!
// */
// Write your code below:

// My Answer:

// function buildFenceCommand(numOfFencePosts, fencePostMaterial) {
//     if (numOfFencePosts < 0) {
//         numOfFencePosts = 0
//     }
//     for (let i = numOfFencePosts; i <= 10; i++) {
//     console.log("JARVIS is now building", fencePostMaterial, "fence post number:", i)
//     } 
// }

// buildFenceCommand(-5, "wooden")

/* I tried adding an if statement that would console.log that the fense was complete after the 10th fence post was built, but i wasnt able to figure out how. Need to work on later */

// Elle's Example:

function buildFenceCommand(numOfFencePostsNeeded, fencePostMaterial) {
    for (let numOfPostsBuiltSoFar = 0; numOfPostsBuiltSoFar < numOfFencePostsNeeded; numOfPostsBuiltSoFar++) {
    console.log("JARVIS is now building " + fencePostMaterial + "fence post number: " + numOfPostsBuiltSoFar + ".")
    } 
}

buildFenceCommand(10, "wood")

/* I learned that i need to use dynamic variables instead of hardcoded values for functions */