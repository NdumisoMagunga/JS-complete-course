console.log('hello world');

console.log(200);

console.log(true);
console.log(null);

var num = 10;

console.log(num);

console.log("string", 10, num, true, null, 10.33);

//functions or subroutines

function makeCoffee(sugar, milk) {
    var instructions = "Boil water, ";

instructions += " pour into cup, ";

instructions += "add coffee, ";

instructions += " add " + sugar + " spoons of sugar, ";

instructions += " add " + milk + " % milk";

return instructions;
}

console.log(makeCoffee(3, 20));