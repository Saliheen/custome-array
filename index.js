class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  shift() {
    const keys = Object.keys(this.data);
    keys.forEach((key, index) => {
      this.data[index] = this.data[index + 1];
    });
    this.length--;
    delete this.data[this.length];
  }
}

const myNewArray = new MyArray();
myNewArray.push(20);
myNewArray.push(30);
myNewArray.push(40);
console.log(myNewArray);

myNewArray.shift();

console.log(myNewArray);
