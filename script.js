// singleton - is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.
// при кліку на сторінку clickcounter збільшується 
var Singleton = (function () {
    var instance; // The single instance of the Singleton
    var clickCounter = 0; 

    // Function to increase the click counter
    var increaseCounter = function () {
      clickCounter++;
    }

    // Function to create a new Singleton instance
    var createInstance = function () {
      return {
        getClickCounter: function () {
          return clickCounter; // Get the current click count
        },
        registerClick: function () {
          increaseCounter(); // Register a click and increase the counter
        }
      };
    }

    return {
      // Function to get the Singleton instance
      getInstance: function () {
        if (!instance) {
          instance = createInstance(); // Create the instance if it doesn't exist
        }
        return instance; // Return the single instance
      }
    }
  })();

console.log("Click count: " + Singleton.getInstance().getClickCounter());

// Add a click event listener to register clicks
document.addEventListener("click", function () {
  Singleton.getInstance().registerClick(); 
});
