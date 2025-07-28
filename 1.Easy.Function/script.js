// Javascript Challenge

// 1. EASY 

function exercise(exerciseName) {
    return function() {
        console.log("Today's Exercise: " + exerciseName);
    }
}

exercise("Running")();
exercise("Swimming")();
exercise("Dancing")();
exercise("Fencing")();

