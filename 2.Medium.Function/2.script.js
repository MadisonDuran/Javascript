// 2. MEDIUM

function sharePizza(totalSlices, numPeople) {
    return `Each person gets ${totalSlices / numPeople} slices of pizza; from our ${totalSlices} slice pizza`;
}

console.log(sharePizza(8, 2));