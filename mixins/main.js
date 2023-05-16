// walking
let walking = {
  walk() {
    console.log(this.name, "is walking");
  },
};
// talking
let talking = {
  talk() {
    console.log("talking");
  },
};
// eating
let eating = {
  eat() {
    console.log(this.name, " is eating,  as it is  a ", this.type);
  },
};

class Sample {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

// Human
let human = Object.assign(
  new Sample("amol", "human"),
  walking,
  talking,
  eating
);
human.walk();
human.eat();
// Robot
let robot = Object.assign(new Sample("alexa", "robot"), walking, talking);
robot.walk();
