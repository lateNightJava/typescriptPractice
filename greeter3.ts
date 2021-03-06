/*
  Notice that classes and interfaces play well together,
  letting the programmer decide on the right level of abstraction

  the use of public on arguments to the constructor is a shorthand
  that allows us to automatically create properties with that name
*/

class Student {
  fullName: string;

  constructor (
    public firstName: string,
    public middleInitial: string,
    public lastName: string,
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User3");

document.addEventListener("DOMContentLoaded", function () {
  document.body.textContent = greeter(user);
});
