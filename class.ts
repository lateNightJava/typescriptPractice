class Greeter {
  // greeting: string;
  constructor(message: string) {
    this.greeting: string = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

const greeter = new Greeter("World");

console.log(greeter.greet());
