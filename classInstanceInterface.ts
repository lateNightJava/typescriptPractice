interface ClockInterface {
  currentTime: Date;
  setDate(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();

  setDate(d: Date) {
    this.currentTime = d;
  }

  constructor(h: number, m: number) {}
}

const myClock = new Clock(12, 35);

console.log('myClock', myClock.currentTime);

setTimeout(function() {
  myClock.setDate(new Date());
  console.log('myClock change', myClock.currentTime);
}, 5000);
