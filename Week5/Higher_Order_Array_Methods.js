//Section A .filter()
console.log("Section A .filter()");
function fiveAndGreaterOnly(arr){
    return result = arr.filter(function(num){
        if(num >= 5){
            return num
        };
    });
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

function evensOnly(arr){
    return result = arr.filter(function(num){
        if(num % 2 == 0){
            return num
        };
    });
}
console.log(evensOnly([3, 6, 8, 2]));

//Extra Credit) Make a filtered list of all the people who are old enough to see The Matrix (17+).
function ofAge(arr){
    return result = arr.filter(function(num){
        if(num.age >= 17){
            return num.name;
        };
    });
}
console.log(ofAge([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100},
]));

//Section B .map()
console.log("Section B .map()");
function doubleNumbers(arr){
    return result = arr.map(function(num){
        return num * 2;
    });
}
console.log(doubleNumbers([2, 5, 100]));

function stringItUp(arr){
    return result = arr.map(x => + x).join();
}
console.log(stringItUp([2, 5, 100]));

function capitalizeNames(arr){
    return result = arr.map(function(num){
        return num[0].toUpperCase() + num.substr(1).toLowerCase();
    })
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//Extra Credit 1) Make an array of strings of the names
function namesOnly(arr){
    return result = arr.map(function(num){
        return num.names;
    })
}
console.log(namesOnly([
    {
        names: "Angelina Jolie",
        age: 80
    },
    {
        names: "Eric Jones",
        age: 2
    },
    {
        names: "Paris Hilton",
        age: 5
    },
    {
        names: "Kanye West",
        age: 16
    },
    {
        names: "Bob Ziroll",
        age: 100
    },
]));

//Extra Credit 2) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    return result = arr.filter(function(num){
        if(num.age >= 17){
            console.log(num.names + " can see The Matrix.");
        } else {
            console.log(num.names + " cannot see The Matrix.");
        };
    });
}
console.log(makeStrings([
    {
        names: "Angelina Jolie",
        age: 80
    },
    {
        names: "Eric Jones",
        age: 2
    },
    {
        names: "Paris Hilton",
        age: 5
    },
    {
        names: "Kanye West",
        age: 16
    },
    {
        names: "Bob Ziroll",
        age: 100
    },
]));

//Section C .reduce()
console.log("Section C .reduce()");
function total(arr){
    return result = arr.reduce(function(a,b){
        return a + b;
    });
}
console.log(total([1, 2, 3]));

function stringConcat(arr){
    //not sure how to get it to output the other numbers
    return result = arr.reduce(function(num){
        if(num >= 0){
            return num.toString();
        };
    }); 
}
console.log(stringConcat([1, 2, 3]));

function totalVotes(arr){
    //return voters.filter(person => person.voted).length;
    return arr.reduce(function(count, voter){
        return count + voter.voted;
    }, 0);
}
var voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]; /**/
console.log(totalVotes(voters));

//Extra Credit 1) Given an array of all your wishlist items, return the total cost of all items
function shoppingSpree(){
        return wishlist.map(x => x.price).reduce((a, b) => a + b);
}
var wishlist = [
    {title: "Tesla Model S", price: 90000},
    {title: "4 carat diamond ring", price: 45000},
    {title: "Fancy hacky Sack", price: 5},
    {title: "Gold fidgit spinner", price: 2000},
    {title: "A second Tesla Model S", price: 90000},
];
console.log(shoppingSpree(wishlist));

//Extra Credit 2) Given an array of arrays, flatten them into a single array
//Note: Take a look at Array.concat() to help with this one
function flatten(arr){
    return result = arr.concat.apply(arrays.concat());
}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays));

//Section D .sort()
console.log("Section D .sort()");
function leastToGreatest(arr){
    return result = arr.sort(function(a, b){
        return a - b;
    });
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

function greatestToLeast(arr){
    return result = arr.sort(function(a, b){
        return b - a;
    });
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

function lengthSort(arr){
    return result = arr.sort(function(a,b){
        return a.length - b.length;
    })
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

//Extra Credit) Sort an array alphabetically
function alphabetical(arr){
    return result = arr.sort();
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));