// 2. MEDIUM
// This function calculates how many slices of pizza each person gets when sharing a pizza. 
// It takes two arguments: totalSlices (total slices of pizza) and numPeople (number of people sharing).
// It returns a output message with the calculation formatted to two decimal places

function sharePizza(totalSlices, numPeople) {
    // Calculate slices per person, format to 2 decimals, and return the result in a sentence.
    return `Each person gets ${(totalSlices / numPeople).toFixed(2)} slices of pizza; from our ${totalSlices} slice pizza`;
}

// Inputs to test differennt results
console.log(sharePizza(8, 2)); // Each person gets 4.00 slices of pizza; from our 8 slice pizza
console.log(sharePizza(8, 3)); // Each person gets 2.67 slices of pizza; from our 8 slice pizza
console.log(sharePizza(21, 20)); // Each person gets 1.05 slices of pizza; from our 21 slice pizza
console.log(sharePizza(10, 3)); // Each person gets 3.33 slices of pizza; from our 10 slice pizza
