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

  deleteByIndex(index) {
    if (index > this.length - 1) {
      throw new Error("Invalid index");
    }

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    delete this.data[this.length - 1];
  }
}

const myNewArray = new MyArray();

myNewArray.push(60);
console.log("----------------------------------");
console.log(JSON.stringify(myNewArray, null, 3));

myNewArray.deleteByIndex(2);
console.log("----------------------------------");
console.log(JSON.stringify(myNewArray, null, 3));
