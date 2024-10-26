
/* 1. **Create a Function**:
- Write a function named `calculate` that takes three arguments: two numbers and a string representing the operation (e.g., `"add"`, `"subtract"`, `"multiply"`, `"divide"`).
2. **Handle Basic Operations**: */
   
 function calculate (number1, number2, operator) {

    let operators_list = ["add", "subtract", "multiply", "divide"]

  //  Ensure that both numbers passed as arguments are valid numbers.
    
    if (isNaN(number1) || isNaN(number2))
        return "Invalid input: both arguments must be numbers.";   

   // **Default Case for Unknown Operations**:

    if (operators_list.indexOf(operator) ===-1) 
         return "Unknown operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
   
  //  **Bonus**: - Implement the function using a `switch/case` statement instead of `if/else` for the operation handling. */
   
  switch (operator) {

        case "add" : {
            
            return number1 + number2;
        }
    
        case "subtract" : {
    
            return number1 - number2;
        }
    
        case "multiply" : {
    
            return number1 * number2;
        }
    
        case "divide" : {
            if (number2 === 0) {
                return  "Invalid input: cannot divide by zero;"
            }
            else {
            return number1 / number2;
            }
        }

    }

}

console.log (calculate(10,5, "add")); // Output: 15
console.log (calculate(10, 5, "times")); // Output: "Unknown operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
console.log (calculate("ten",5,"add")); // Output: "Invalid input: both arguments must be numbers."; 
console.log (calculate(10, "five", "add")); // Output: "Invalid input: both arguments must be numbers."; 
console.log (calculate(10, 5, "ad")); // Output: "Unknown operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
console.log (calculate(10,0,"divide")); // Output: "Invalid input: cannot divide by zero"




    







