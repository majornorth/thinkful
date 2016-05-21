// dishes object

var dishes = {
    eggs: { eggs: '2.50' },
    bacon: { bacon: '5.00' },
    waffles: { waffles: '8.00' },
    milk: { milk: '1.50' },
    oj: { oj: '3.00' }
};


// Table of diners
var Table = function(diners, total, billPerPerson) { // Do I need two args here?
    this.diners = diners;
    this.bill = total;
    this.billPerPerson = billPerPerson;
};

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
var total = 0;

// for (i=0; tableOne.diners.length; i++) {
//     if (i <= tableOne.diners.length) {
//         var tab = 0;
//         var item = tableOne.diners[i].diner.dishes[i];


//         for (var prop in item) { console.log(item[prop]) }
//     }
// };

// i = 0;

// while (i < tableOne.diners.length) {
//     var totalDishes = tableOne.diners[i].diner.dishes.length;
//     d = 0;

//     while (d < totalDishes) {
//         var item = tableOne.diners[i].diner.dishes[d];
//         for (var prop in item) { tab.push(item[prop]); };
//         d++;
//     }
//     i++;
// }

// i = 0;

// while (i < tab.length) {
//     total = total + parseFloat(tab[i]);
//     i++;
// }

var tab = [];


// By using forEach instead of while, I'm saving 17 lines of code
tableOne.diners.forEach(function(diner) {
    var allDishes = diner.diner.dishes;

    allDishes.forEach(function(dish) {
        for (var prop in dish) {
            tab.push(dish[prop]);
        };
    });
});

tab.forEach(function(cost) {
    total = total + parseFloat(cost);
});

// Add a fixed tax percentage to the total bill

var taxRate = .085;

var mealTax = total * taxRate;


// Add a percentage tip to the total bill

var tipRate = .20;

var mealTip = total * tipRate;

total = total + mealTax + mealTip;

total = parseFloat(total).toFixed(2);

tableOne.bill = total;


// Split the bill fairly among the diners
// Each diner should pay the tax on their own food
// Each diner should pay an equal share of the tip

var billPerPerson = parseFloat(tableOne.bill) / tableOne.diners.length;
billPerPerson = parseFloat(billPerPerson).toFixed(2);

tableOne.billPerPerson = billPerPerson;


// Print out a total bill

console.log(tableOne.bill);

// Print a breakdown for what each diner owes

console.log(tableOne.billPerPerson);


