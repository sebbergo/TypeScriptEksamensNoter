//ES6 method new
class PersonNew {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this.show = this.show.bind(this);
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set name(age) {
    this._age = age;
  }

  show = function () {
    console.log(`${this._name}, ${this._age}`);
  };
}

const person1 = new PersonNew("Sebastian", "22");
person1.show();

//Old method
function PersonOld(name, age) {
  this.name = name;
  this.age = age;
  this.showThis = function () {
    console.log(this);
  };
}

const person2 = new PersonOld("Sebastian", "22");

person2.showThis();
