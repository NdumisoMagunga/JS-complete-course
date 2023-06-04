

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

// Arrays & Objects

// Arrays are list objects


// Objects { properties }  arrays [ elements ]

var car = {
    color : 'Red',
    make :'volvo',
    speed: 200,
    drive : function(){ return "drive"; },
    engine : {
        size: 2.0,
        make: 'bmw',
        fuel: 'petrol',
        pistons : [ { maker:'bmw' }, { maker: 'bmw2' } ]
    }
};

var shoppingList = [
    'apple',
    'orange',
    'pear',
    'door'
];

var array = [
    'string',
    100,
    ['embed', 200],
    {car : 'ford'},
    function(){ return "drive"; },
]


//access members

console.log(car.make);
console.log(car.engine);

console.log(car.engine.make);