// Controller works with display
let uiController = (function () {})();

// Controller works with finance
let financeController = (function () {})();

// Controller that connects
let appController = (function (uiController, financeController) {
  let ctrlAddItem = function () {
    // Get data
    // Pass data to finance controller
    // Show data on display
    // Calculate budget
    // Show remainings on display
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter" || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
