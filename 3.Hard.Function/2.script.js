// 3. HARD
// This function creates a closure that stores personally identifiable information(PII)
// such as name and SSN. These values are private and cannot be accessed directly.
// Instead, they can only be retrived through public methods.

function createPII() {
    // Private variables: only accessible inside the function
    let name = "John";
    let ssn = "123-45-6789";
    // Return an object with public methods to access the private data
    return {
        // Public method to get the name
        getName: function() {
          return name;
        },
        // Public method to get the SSN
        getSSN: function() {
            return ssn;
        }
    }
}
// Create an instance of the PII closure
const patient2 = createPII();
// Testing access:
// Direct property access should return undefined because name and ssn are private 
console.log(patient2.name); // Output: undefined
console.log(patient2.ssn); // Output: undefined
// Accessing through public methods should return values
console.log(patient2.getName()); // Output: John
console.log(patient2.getSSN()); // Output: 123-45-6789