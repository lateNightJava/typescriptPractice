/*
  interface describes objects that have firtName and lastName
  two types are compatible if their internal structure is compatible
  this allows us to implement an interface just by having the shape
  the interface requires, without an explicit implements clause
*/
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User2" };

document.addEventListener("DOMContentLoaded", function () {
  document.body.textContent = greeter(user);
});
