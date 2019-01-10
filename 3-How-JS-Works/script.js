///////////////////////////////////////
// Lecture: Hoisting
/*calculateYear(1987);

function calculateYear (year) {
    "use strict";
    console.log(2017 - year);
}

var retirement = function (year) {
    "use strict";
    console.log(65 - (2017 - year));
};

retirement(1990);*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
function printMessage() {
    "use strict";
    console.log(this);
}

var mike = {
    name: 'Mike',
    printName: function () {
        "use strict";
        console.log(this);
    }
};

var juan = {
    name: 'Juan'
};
juan.printName = mike.printName();

printMessage();
mike.printName();









