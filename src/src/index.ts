let name: string = "Chidera";

console.log(name)
let count: number = 10

name = 'Paul';

console.log(name)

count = 5

import logger, { Person } from "./tools"

const person1 = new Person(
    "Mark-Oscar",
    "Duru",
    "male",
    1.7,
    ["Playing football","drawing"],
    new Date("2002-09-17"),
    true 
);

logger(`The first person is ${person1.firstName} ${person1.lastName} ${person1.gender === "female"? "She":"He"} likes ${person1.hobbies.join(",")}.`)
