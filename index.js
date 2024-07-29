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
}

const myNewArray = new MyArray();
myNewArray.push(20);
myNewArray.push(30);
myNewArray.push(40);
console.log(myNewArray.get(10));
