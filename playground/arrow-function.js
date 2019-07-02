var square = x => x * x;

console.log(square(11));

var user = {
  name: "dimuthu",
  sayHi: () => {
    console.log(`Hi, i am ${ this.name }`);
  },
  sayHiAlt(){
    console.log(arguments);
    console.log(`Hi, i am ${ this.name }`);
  }
};

user.sayHiAlt(1, 2, 3);
