//var Person = function(name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//    this.calculateAge = function() {
//        console.log(2019 - this.yearOfBirth);
//    }
//};
//
//var john = new Person('John', 1990, 'Teacher');
//john.calculateAge();
//

// Object.create

//var personProto = {
//    calculateAge: function() {
//        console.log(2019 - this.yearOfBirth);
//    }
//};
//
//var john = Object.create(personProto);
//john.name = 'John';
//john.yearOfBirth = 1990;
//john.job = 'Teacher';
//john.calculateAge();
//
//var jane = Object.create(personProto, {
//    name: { value: 'Jane'},
//    yearOfBirth: { value: 1969 },
//    job: { value: 'deesigner'}
//});
//
//jane.calculateAge();

//function interviewQuestion(job) {
//    return function(job) {
//        console.log('What does being a ' + job + ' entail?');
//    }
//}
//
//const job = 'Manager';
//var quest = interviewQuestion(job);
//quest(job);
//
//(function(goodLuck) {
//    var score = Math.random() * 10;
//    console.log(score >= (5 - goodLuck));
//})(3);

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlement! I\'m ' + this. name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');   
       } else if(style === 'friendly') {
           console.log('Hey! What\'s up? I\'m ' + this. name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
       }
    }
}

john.presentation('friendly', 'evening');

var emily = {
    name: 'Emily',
    age: 30,
    job: 'designer'
};

john.presentation.call(emily, 'formal', 'morning');
var johnFriendly = john.presentation.bind(john, 'friendly')();
