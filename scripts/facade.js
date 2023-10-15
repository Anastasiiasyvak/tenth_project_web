// Facade - create a simple interface to a large and complex piece of code to hide its complexity.

class Bookstore {
    findBook(bookTitle) {
      // searching for a book by title
      console.log(`Searching for the book "${bookTitle}"...`);
      return { title: bookTitle, author: "J.K. Rowling ", price: 50 };
    }
  
    addToCart(book) {
      // add to cart our book
      console.log(`Adding "${book.title}" to the shopping cart.`);
      return "Book added to cart.";
    }
  
    checkout() {
      // Ordering and payment logic
      console.log("Checkout process completed.");
      return "Payment successful. Thank you for your purchase!";
    }
  }
  
  class BookstoreFacade {
    constructor() {
      this.bookstore = new Bookstore();
    }
  
    purchaseBook(bookTitle) {
      const book = this.bookstore.findBook(bookTitle);
      if (book) {
        this.bookstore.addToCart(book);
        return this.bookstore.checkout();
      } else {
        return "Book not found. Purchase failed.";
      }
    }
  }
  
  // using facade for buying a book
  const bookstoreFacade = new BookstoreFacade();
  const purchaseResult = bookstoreFacade.purchaseBook("Harry Potter");
  console.log(purchaseResult);
  