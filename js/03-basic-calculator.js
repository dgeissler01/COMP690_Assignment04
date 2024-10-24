// ADD A FUNCTION CALLED CALCULATE
let operation, x, y, z


function calculate(x, y, operation) {
    switch (operation) {
        case '+':
            z = x + y
            alert(`${x} + ${y} = ${z}`)
            break;
        case '-':
            z = x - y
            alert(`${x} - ${y} = ${z}`)
            break;
        case '*':
            z = x * y
            alert(`${x} * ${y} = ${z}`)
            break;
        case '/':
            z = x / y
            alert(`${x} / ${y} = ${z}`)
            break;
        default:
            alert(`You have entered ${operation}`)
            break;
    }
}

// DO WHILE LOOP FOR OPERATION VALIDATION
do {

// COLLECT FIRST NUMBER FROM USER
x = parseFloat(prompt(`Please enter the first number.`))
console.log(x)

// COLLECT SECOND NUMBER FROM USER
y = parseFloat(prompt(`Please enter the second number.`))
console.log(y)

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
operation = (prompt(`Please enter the operation you would like to perform. Choose from +, -, *, or /`))
console.log(operation)

if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
    alert(`You have entered \"${operation}\". Please choose from +, -, *, or / as an operator.`)
}

}  while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/')

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
calculate(x, y, operation)
