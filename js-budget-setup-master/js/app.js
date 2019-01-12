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

  //Submit budget method
  submitBudget() {
    const value = this.budgetInput.value

    if (value === '' || value <= 0) {
      this.budgetFeedback.innerHTML = `<span>Budget cannot be empty, zero or negative</span>`
      this.budgetFeedback.classList.remove('hide-feedback')
      this.budgetFeedback.classList.add('show-feedback', 'error-feedback')

      setTimeout(() => {
        this.budgetFeedback.classList.remove('show-feedback', 'error-feedback')
        this.budgetFeedback.classList.add('hide-feedback')
      }, 2000)
    }
    else {
      // this.budgetAmount.textContent = value
      // this.budgetInput.value = ''
      // this.showBalance()

      var balanceContainer = document.querySelector('.balance-container');
      balanceContainer.classList.add('slide-left-center')

      var budgetContainer = document.querySelector('.budget-container');
      budgetContainer.classList.remove('slide-left-center')
      budgetContainer.classList.add('slide-left-out')
    }
  }

  showBalance() {

  }
}

function eventListeners() {
  const budgetForm = document.querySelector('#budget-form')
  const expenseForm = document.querySelector('#expense-form')
  const expenseList = document.querySelector('#expense-list')

  //Create ne UI instance
  const bForBudget = new UI()

  //Budget form submit
  budgetForm.addEventListener('submit', function(event) {
    event.preventDefault()
    bForBudget.submitBudget()
  })

  //Expense form submit
  expenseForm.addEventListener('submit', function(event) {
    event.preventDefault()
  })

  //Expense list click
  expenseList.addEventListener('click', function() {
    
  })
}

var nextButton = document.querySelector('#welcome-next')
nextButton.addEventListener('click', next)

function next(event) {
  event.preventDefault()

  var welcomeMessage = document.querySelector('.welcome-message')
  welcomeMessage.classList.add('slide-left-out')

  var budgetContainer = document.querySelector('.budget-container');
  budgetContainer.classList.add('slide-left-center')
}

document.addEventListener('DOMContentLoaded', function() {
  eventListeners()
})