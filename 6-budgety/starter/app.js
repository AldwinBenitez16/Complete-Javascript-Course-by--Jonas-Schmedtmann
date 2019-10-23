// BUDGET CONTROLLER
var budgetController = (function() {
    
})();

// UI CONTROLLER
var UIController = (function() {
    
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    document.querySelector('.add__btn').addEventListener('click', function() {
        
    });
    
    document.addEventListener('keypress', function(e) {
        if(e.keyCode === 13 || event.which === 13) {
           console.log('Enter was pressed.');
           }
    });
    
})(budgetController, UIController);