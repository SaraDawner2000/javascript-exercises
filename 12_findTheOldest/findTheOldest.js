const findTheOldest = function(arrOfPeople) {
    let oldest = {};
    let oldestAge = 0;
    arrOfPeople.forEach(person => {
        let age = getAge(person.yearOfBirth, person.yearOfDeath)
        if (age > oldestAge){
            oldest = person
            oldestAge = age
        }
    });
    return oldest
};

const getAge = function(birth, death){
    if (death === undefined){
        death = new Date().getFullYear();
    }
    return death - birth
};
// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1066,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

// console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
