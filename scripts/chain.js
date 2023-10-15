// chain - pattern provides a chain of loosely coupled objects one of which can satisfy a request. This pattern is essentially a linear search for an object that can handle a particular reques
// The Receipt class represents a receipt for a store purchase. It allows adding items and calculating the total cost.

class Receipt {
    constructor() {
      this.items = [];   // Initialize an empty array to store items in the receipt.
    }
  
    add(item) {
      this.items.push(item);  // Add the given item to the receipt's item list.
      return this;
    }
  
    calculateTotal() {
    // Calculate the total cost by summing the prices of all items in the receipt.
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  
    print() {
      console.log("Receipt:");
      this.items.forEach(item => {
        console.log(`${item.name}: $${item.price}`);
      });
      console.log(`Total: $${this.calculateTotal()}`);
    }
  }
  
  class Item {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
// Using the Chain of Responsibility pattern to create a receipt.
  const receipt = new Receipt();
  const item1 = new Item("Book", 10);
  const item2 = new Item("T-shirt", 20);
  const item3 = new Item("Shoes", 50);
  
  receipt.add(item1).add(item2).add(item3);   // Add items to the receipt and use method chaining.
  
  receipt.print();
  