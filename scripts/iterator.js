// iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation

//  an individual item on a shopping receipt.
class ReceiptItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// shopping receipt that can store multiple items.
class ShoppingReceipt {
  constructor() {
    this.items = [];  // An array to store the receipt items.
  }

  addItem(item) {
    this.items.push(item);
  }

  getIterator() {
    return new ReceiptIterator(this.items);
  }
}
// Iterator for iterating through items in a shopping receipt.
class ReceiptIterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }
// Resets the iterator to the beginning.
  first() {
    this.index = 0;
    return this.next();
  }
// Returns the next item in the iteration.
  next() {
    return this.items[this.index++];
  }
  // Checks if there are more items to iterate through.

  hasNext() {
    return this.index < this.items.length;
  }
}
// Function to demonstrate the usage of the shopping receipt and iterator.

function run() {
  const receipt = new ShoppingReceipt();
  receipt.addItem(new ReceiptItem("Book", 10));
  receipt.addItem(new ReceiptItem("T-shirt", 20));
  receipt.addItem(new ReceiptItem("Shoes", 50));

  const iterator = receipt.getIterator();   // Get an iterator for the receipt items.

  console.log("Items in the receipt:");
  for (let item = iterator.first(); iterator.hasNext(); item = iterator.next()) {
    console.log(`${item.name}: $${item.price}`);
  }
}

run();
