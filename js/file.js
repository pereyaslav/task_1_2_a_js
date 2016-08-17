var myNumber = prompt('Enter the number', '');
myNumber = +myNumber;
var myExponent = prompt('Enter exponential number', '');
myExponent = +myExponent;
var calculate = pow(myNumber, myExponent);
console.log('Result=', calculate);

function pow(myNumber, myExponent) {
    var result;
    if (myExponent == 0) {
        result = 1;
    }   else {
        if (myNumber == 0 && myExponent < 0) {
            result = 'Invalid operation';
        }   else {
            result = 1;
            for (var i = 0; i < Math.abs(myExponent); i++) {
                result = result * myNumber;
            }
            if (myExponent < 0) {
                result = 1 / result;
            }
        }
    }
    return result;
}