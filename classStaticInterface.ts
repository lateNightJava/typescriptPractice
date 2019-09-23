/* Simple way */
interface ClockConstructor {
  new (hour: number, minute: number);
}

interface ClockInterface {
  tick(): void;
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) { }

  tick() {
    console.log("generic sound");
  }
}

const myClock = new Clock(3, 5);
myClock.tick();


/*

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }

  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }

  tick() {
    console.log("tick tock");
  }
}

const digital = createClock(DigitalClock, 1, 2);
const analog = createClock(AnalogClock, 3, 4);

digital.tick();
analog.tick();

*/
