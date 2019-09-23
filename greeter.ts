/* Expects 1 argument of type string */
function greeter(person: string) {
  return "Hello, " + person;
}

let user = "Jane User";

document.addEventListener("DOMContentLoaded",  function () {
  document.body.textContent = greeter(user);
});
