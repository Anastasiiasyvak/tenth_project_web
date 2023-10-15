// we can dynamically add new properties and methods to objects
// The Pizza class represents a pizza and has a cost method that returns the cost of the pizza 

class Pizza {
    cost() {
      return 15;
    }
  }
  
  const cheeseSides = pizza => {
    const cost = pizza.cost();
    pizza.cost = () => cost + 3;
  };
  
  const small = pizza => {
    const cost = pizza.cost();
    pizza.cost = () => cost - 5;
  };

  const medium = pizza => {
    const cost = pizza.cost();
    pizza.cost = () => cost;
  };
  
  
  const large = pizza => {
    const cost = pizza.cost();
    pizza.cost = () => cost + 5;
  };
  
  const withForesight  = pizza => {
    const cost = pizza.cost();
    pizza.cost = () => cost + 3;
  };
  
  const pizza = new Pizza();
  cheeseSides(pizza);
  console.log("Pizza with cheese sides: $" + pizza.cost());
  
  const pizza2 = new Pizza();
  small(pizza2);
  console.log("Small pizza: $" + pizza2.cost());
  

  const pizza3 = new Pizza();
  medium(pizza3);
  console.log("Medium pizza: $" + pizza3.cost());
  

  const pizza4 = new Pizza();
  large(pizza4);
  console.log("Large pizza: $" + pizza4.cost());
  

  const pizza5 = new Pizza();
  withForesight(pizza5);
  console.log("Pizza with foresight: $" + pizza5.cost());
  

 