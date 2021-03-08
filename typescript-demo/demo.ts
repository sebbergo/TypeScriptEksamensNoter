interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person){
    return "Jajaja, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User"};

console.log(greeter(user))