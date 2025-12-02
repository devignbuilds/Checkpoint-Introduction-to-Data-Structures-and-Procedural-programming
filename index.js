/********************************************
 * Checkpoint: Introduction to Data Structures
 * Contains solutions for Problem 1 & Problem 2
 ********************************************/

/********************************************
 * PROBLEM 1: Sum of Distinct Elements
 ********************************************/

/**
 * Function to sum all elements that are unique to each array
 * (symmetric difference)
 * @param {Array<number>} arr1 - First array
 * @param {Array<number>} arr2 - Second array
 * @returns {number} - Sum of distinct elements
 */
function sumDistinct(arr1, arr2) {
  let sum = 0;

  // Loop through arr1 to add elements NOT in arr2
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) sum += arr1[i];
  }

  // Loop through arr2 to add elements NOT in arr1
  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        found = true;
        break;
      }
    }
    if (!found) sum += arr2[i];
  }

  return sum;
}

// Example usage:
console.log("Problem 1 Example:");
console.log(sumDistinct([3, 1, 7, 9], [2, 4, 1, 9, 3])); // Output: 13
console.log(sumDistinct([5, 10, 15], [10, 20])); // Output: 40
console.log(sumDistinct([1, 2, 3], [1, 2, 3])); // Output: 0

/********************************************
 * PROBLEM 2: Dot Product & Orthogonal Vectors
 ********************************************/

/**
 * Calculates the dot (scalar) product of two vectors
 * @param {Array<number>} v1 - First vector
 * @param {Array<number>} v2 - Second vector
 * @returns {number} - Dot product
 */
function dotProduct(v1, v2) {
  let ps = 0; // scalar product
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}

/**
 * Checks if two vectors are orthogonal
 * @param {Array<number>} v1 - First vector
 * @param {Array<number>} v2 - Second vector
 * @returns {boolean} - True if orthogonal
 */
function areOrthogonal(v1, v2) {
  return dotProduct(v1, v2) === 0;
}

/**
 * Checks multiple vector pairs for orthogonality
 * @param {Array<Array<Array<number>>>} pairs - Array of vector pairs [[v1, v2], ...]
 */
function checkVectorPairs(pairs) {
  for (let i = 0; i < pairs.length; i++) {
    const [v1, v2] = pairs[i];
    console.log(
      `Pair ${i + 1}:`,
      areOrthogonal(v1, v2) ? "Orthogonal" : "Not Orthogonal"
    );
  }
}

// Example usage:
console.log("\nProblem 2 Examples:");

// Dot product example
console.log(dotProduct([1, 2, 3], [4, 5, 6])); // Output: 32

// Orthogonal checks
console.log(areOrthogonal([1, 0], [0, 1])); // true
console.log(areOrthogonal([1, 2], [2, 1])); // false

// Multiple vector pairs
checkVectorPairs([
  [[1, 0], [0, 1]],   // Orthogonal
  [[1, 2], [2, 1]],   // Not Orthogonal
  [[2, -1], [1, 2]],  // Not Orthogonal
]);
