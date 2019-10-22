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

function interviewQuestion(job) {
    return function(job) {
        console.log('What does being a ' + job + ' entail?');
    }
}

const job = 'Manager';
var quest = interviewQuestion(job);
quest(job);