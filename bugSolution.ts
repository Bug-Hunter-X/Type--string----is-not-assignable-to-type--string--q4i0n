function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Modify the greeter function
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user)); // Output: Hello, Jane Doe

// Solution 2: Use a single string from the array
console.log(greeter(user[0])); // Output: Hello, Jane