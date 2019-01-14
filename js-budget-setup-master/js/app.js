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
      this.budgetAmount.textContent = value
      this.budgetInput.value = ''
      this.showBalance()

      var balanceContainer = document.querySelector('.balance-container');
      balanceContainer.classList.add('slide-left-center')

      var budgetContainer = document.querySelector('.budget-container');
      budgetContainer.classList.remove('slide-left-center')
      budgetContainer.classList.add('slide-left-out')
    }
  }

  showBalance() {
    const expense = this.totalExpense() 
    const total = parseInt(this.budgetAmount.textContent) - expense

    this.balanceAmount.textContent = total

    if (total < 0) {
        this.balance.classList.add('balance-negative')
    }
    else {
        this.balance.classList.remove('balance-negative')
    }
  }

  submitExpseneForm() {
    const expenseValue = this.expenseInput.value
    const amountValue = this.amountInput.value

    if (expenseValue === '' || amountValue <= 0 ) {
      this.budgetFeedback.innerHTML = `<span>Expense cannot be empty, zero or negative</span>`
      this.budgetFeedback.classList.remove('hide-feedback')
      this.budgetFeedback.classList.add('show-feedback', 'error-feedback')

      setTimeout(() => {
        this.budgetFeedback.classList.remove('show-feedback', 'error-feedback')
        this.budgetFeedback.classList.add('hide-feedback')
      }, 2000)
    }
    else {
      let amount = parseInt(amountValue)
      this.expenseInput = ''
      this.amountInput = ''

      let expense = {
        id: this.itemID,
        title: expenseValue,
        amount
      }
      
      this.itemID++
      this.itemList.push(expense)
      this.addExpense(expense)

      //Show balance
    }
  }

  addExpense(expense) {
    const div = document.createElement('div')
    div.classList.add('expense')
    div.innerHTML = 
    `<div class="expense-item">
        <h6 class="expense-title list-item">- ${expense.title}</h6>
        <h5 class="expense-amount list-item">${expense.amount}</h5>
        
        <div class="expense-icons list-item">
            
            <a href="#" class="edit-icon" data-id="${expense.id}">
              <ion-icon name="create"></ion-icon>
            </a>
            <a href="#" class="delete-icon" data-id="${expense.id}">
              <ion-icon name="trash"></ion-icon>
            </a>
        </div>
    </div>`

    this.expenseList.appendChild(div)
  } 

  totalExpense() {
    let total = 500
    return total
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
    bForBudget.submitExpseneForm()
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