// BUDGET CONTROLLER
var budgetController = (function() {})();

// UI CONTROLLER
var UIController = (function() {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },

    getDOMString: function() {
      return DOMStrings;
    }
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var setupEventListener = function() {
    var DOM = UICtrl.getDOMString();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    // 1. Get the filed input data
    var input = UICtrl.getInput();

    // 2. Add the item to the budget controller
    // 3. Add the item to UI
    // 4. Calculate the budget
    // 5. Display the budget on UI
  };

  return {
    init: function() {
      console.log("Application has started!");
      setupEventListener()
    }
  };
})(budgetController, UIController);

controller.init();
