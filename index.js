class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
    // ...
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;

    // ...
  }

  load(pos) {

    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
    // ...
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
    // ...
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
    // ...
  }

  sum() {
    return this.items.reduce((acc, item) => {
      return acc + item;
    }, 0);
    // ...
  }

  avg() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }

    // ...
  }
}

const sorted = new SortedList();
sorted.add(5);
sorted.add(2);
sorted.add(3);
sorted.add(1);

sorted.add(7);
sorted.add(4);

console.log(sorted.max());

module.exports = SortedList;