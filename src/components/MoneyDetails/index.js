// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {amountDetails} = props
  const {totalBalance, totalIncome, totalExpenses} = amountDetails
  return (
    <>
      <li className="list-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="balance">Your Balance</p>
          <p data-testid="balanceAmount" className="rupees">
            Rs {totalBalance}
          </p>
        </div>
      </li>
      <li className="list-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="balance">Your Income</p>
          <p data-testid="incomeAmount" className="rupees">
            Rs {totalIncome}
          </p>
        </div>
      </li>
      <li className="list-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="balance">Your Expenses</p>
          <p data-testid="expensesAmount" className="rupees">
            Rs {totalExpenses}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
