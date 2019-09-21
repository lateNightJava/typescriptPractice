function greeter(person) {
  return "Hello, " + person;
}

let user = "Jane User";

document.addEventListener("DOMContentLoaded",  function () {
  document.body.textContent = greeter(user);
});
