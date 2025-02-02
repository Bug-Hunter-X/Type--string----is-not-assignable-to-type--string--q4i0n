# Type 'string[]' is not assignable to type 'string'
This bug demonstrates a common type error in TypeScript when passing an array of strings to a function expecting a single string.

## Bug
The `greeter` function expects a single string as input.  However, the `user` variable is an array of strings. Calling `greeter` with `user` results in a type error.

## Solution
The solution involves either modifying the `greeter` function to accept an array of strings or changing how the `user` variable is used to provide a single string.
