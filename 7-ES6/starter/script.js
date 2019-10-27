// Blocks and IIFEs

//{
//    const a = 3;
//    let b = 2;
//    var c = 5;
//}
//
//console.log(c);

//// Strings
//
//let firstName = 'John';
//let lastName = 'Smith';
//const yearOfBirth = 1990;
//
//function calcAge(year) {
//    return 2019 - year;
//}
//
//// ES6
//
//const n = `${firstName} ${lastName}`;
//console.log(n.startsWith('j'));
//console.log(n.endsWith('th')); 
//console.log(n.includes(' '));
//console.log(firstName.repeat(5));

//ES6

//const box6 = {
//    color: 'green',
//    position: 1,
//    clickMe: () => {
//        
//        document.querySelector('.green').addEventListener('click', () => {
//            
//            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//            alert(str);
//        });
//    }
//}
//box6.clickMe();

// ES6

//function Person(name) {
//    this.name = name;
//}
//
//Person.prototype.myFriends5 = function(friends) {
//    
//    var arr = friends.map(function(el) {
//        return this.name + ' is friends with ' + el;
//    }.bind(this));
//    console.log(arr);
//};
//
//var friends = ['Bob', 'Jane', 'Mark'];
//new Person('John').myFriends5(friends);

// ES6
//const [name, age] = ['John', 26];
//console.log(name);
//console.log(age);
//
//const obj = {
//    firstName: 'John',
//    lastName: 'Smith'
//};
//
//const { firstName, lastName } = obj;
//console.log(firstName);
//console.log(lastName);
//
//const {firstName: a, lastName: b} = obj;
//
//console.log(a);
//console.log(b);

// ES6

//const h = document.querySelector('h1');
//const boxes = document.querySelectorAll(.box);
//const all = [h, ...boxes];
//
//Array.from(all).forEach(cur => cur.style.color = 'purple');

// Maps

const question = new Map();

question.set('question', 'What is the official name of the latest major JavasScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));

if(question.has(4)) {
//    question.delete(4);
    console.log('Answer 4 is here');
}

//question.clear();

//question.forEach((value, key) => {
//    console.log(`This is ${key}, and it's set to ${value}`);
//});

//for(let [key, value] of question.entries()) {
//    
//}



