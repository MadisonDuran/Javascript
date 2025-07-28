// 1. EASY 
// This function uses closure to return a function that logs today's exercise.

function exercise(exerciseName) {
    // The inner function remembers the exerciseName parameter
    return function() {
    // Log the message dynamically with the exercise name
        console.log("Today's Exercise: " + exerciseName);
    }
}

exercise("Running")(); // Output: Today's Exercise: Running
exercise("Swimming")(); // Output: Today's Exercise: Swimming
exercise("Dancing")(); // Output: Today's Exercise: Dancing
exercise("Fencing")(); // Output: Today's Exercise: Fencing

