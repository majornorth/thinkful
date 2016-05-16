// dishes object

var dishes = {
    eggs: { eggs: '2.50' },
    bacon: { bacon: '5.00' },
    waffles: { waffles: '8.00' },
    milk: { milk: '1.50' },
    oj: { oj: '3.00' }
};


// Table of diners
var Table = function(diners, total) {
    this.diners = diners;
    this.bill = total;
};

// var Table = function(diners) {
//     var theTable = {};

//     function(diners) {
//         for (var i=0; i<diners.length; i++) {
//             var dinerName = diners[i].dinerName;
//             theTable.
//         }
//     }

//     this.diners = theTable;
// };


// Create diner objects which represent a single diner.
var Diner = function(dishes, dinerName) {
    this.diner = {
        dinerName: dinerName,
        dishes: dishes
    }
};


// Add dishes to diners' meals
var Ashley = new Diner([dishes.eggs, dishes.bacon, dishes.oj], 'Ashley');
var Stewart = new Diner([dishes.waffles, dishes.milk], 'Stewart');
var Lisa = new Diner([dishes.bacon, dishes.waffles, dishes.milk], 'Lisa');
var Brandon = new Diner([dishes.eggs, dishes.waffles, dishes.oj], 'Brandon');


// Create the table
var tableOne = new Table([Ashley, Stewart, Lisa, Brandon]);

// Total up the cost of all of the diners' meals
var total;

// for (i=0; tableOne.diners.length; i++) {
//     if (i <= tableOne.diners.length) {
//         var tab = 0;
//         var item = tableOne.diners[i].diner.dishes[i];


//         for (var prop in item) { console.log(item[prop]) }
//     }
// };

i = 0;
var tab = [];

while (i < tableOne.diners.length) {
    var totalDishes = tableOne.diners[i].diner.dishes.length;
    d = 0;

    while (d < totalDishes) {
        var item = tableOne.diners[i].diner.dishes[d];
        for (var prop in item) { tab.push(item[prop]); };
        d++;
    }
    i++;
}

// tableOne.bill(total);



// Add a fixed tax percentage to the total bill



// Add a percentage tip to the total bill



// Split the bill fairly among the diners



// Each diner should pay the tax on their own food



// Each diner should pay an equal share of the tip



/* If you choose to round the amounts, you may notice that the sum of the amounts does not equal the total bill amount anymore. Don't worry about that, or distribute the discrepancy in a fair way for an extra challenge. */



// Print out a total bill



// Print a breakdown for what each diner owes


