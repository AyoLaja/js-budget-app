class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
}

var nextButton = document.querySelector('#welcome-next')
nextButton.addEventListener('click', next)

function next(event) {
  event.preventDefault()

  var welcomeMessage = document.querySelector('.welcome-message')
  welcomeMessage.classList.add('slide-left-out')

  var budgetForm = document.querySelector('.budget-form');
  // budgetForm.style.display = 'block'
  budgetForm.classList.add('slide-left-center')
}
