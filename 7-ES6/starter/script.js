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

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        document.querySelector('.green').addEventListener('click', () => {
            
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();