document.addEventListener('DOMContentLoaded', () => {
    const incomeForm = document.getElementById('income-form');
    const expenseForm = document.getElementById('expense-form');
    const totalIncomeElement = document.getElementById('total-income');
    const totalExpenseElement = document.getElementById('total-expense');
    const netProfitElement = document.getElementById('net-profit');
    
    let totalIncome = 0;
    let totalExpense = 0;

    incomeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const incomeAmount = parseFloat(document.getElementById('income-amount').value);
        if (!isNaN(incomeAmount) && incomeAmount > 0) {
            totalIncome += incomeAmount;
            totalIncomeElement.textContent = totalIncome.toFixed(2);
            updateNetProfit();
            incomeForm.reset();
        }
    });

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
        if (!isNaN(expenseAmount) && expenseAmount > 0) {
            totalExpense += expenseAmount;
            totalExpenseElement.textContent = totalExpense.toFixed(2);
            updateNetProfit();
            expenseForm.reset();
        }
    });

    function updateNetProfit() {
        const netProfit = totalIncome - totalExpense;
        netProfitElement.textContent = netProfit.toFixed(2);
    }
});
