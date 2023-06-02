import './index.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onChangeType = event => {
    this.setState({
      optionId: event.target.value,
    })
  }

  onAddTransactions = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption
    const newObject = {
      id: uuidv4(),
      titleInput,
      amountInput,
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newObject],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    const filteredResult = transactionsList.filter(each => each.id !== id)
    this.setState({
      transactionsList: filteredResult,
    })
  }

  getBalance = () => {
    let balance = 0
    let income = 0
    let expenses = 0
    const {transactionsList} = this.state
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += Number(eachTransaction.amountInput)
      } else {
        expenses += Number(eachTransaction.amountInput)
      }
      balance = income - expenses
    })
    return balance
  }

  getIncome = () => {
    let income = 0
    const {transactionsList} = this.state
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += Number(eachTransaction.amountInput)
      }
    })
    return income
  }

  getExpenses = () => {
    let expenses = 0
    const {transactionsList} = this.state
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenses += Number(eachTransaction.amountInput)
      }
    })
    return expenses
  }

  render() {
    const {transactionsList, titleInput, amountInput, optionId} = this.state
    const totalBalance = this.getBalance()
    const totalIncome = this.getIncome()
    const totalExpenses = this.getExpenses()
    const object = {
      totalBalance,
      totalIncome,
      totalExpenses,
    }
    return (
      <div className="app-container">
        <div className="money-manager">
          <div className="welcome-container">
            <h1>Hi,Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails amountDetails={object} />
          </div>
          <div className="container">
            <div className="add-transaction-container">
              <h1>Add Transaction</h1>
              <form onSubmit={this.onAddTransactions}>
                <label htmlFor="title">TITLE</label>
                <br />
                <input
                  onChange={this.onChangeTitle}
                  placeholder="TITLE"
                  id="title"
                  value={titleInput}
                />
                <label htmlFor="amount">AMOUNT</label>
                <br />
                <input
                  onChange={this.onChangeAmount}
                  placeholder="AMOUNT"
                  id="amount"
                  value={amountInput}
                />
                <label htmlFor="type">Type</label>
                <br />
                <select value={optionId} onChange={this.onChangeType} id="type">
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <button className="add-button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="history-title">History</h1>
              <div className="history-list-container">
                <div className="history-types-container">
                  <p className="history-heading">Title</p>
                  <p className="history-heading">Amount</p>
                  <p className="history-heading">Type</p>
                </div>
                {transactionsList.length !== 0 && (
                  <ul className="transaction-container">
                    {transactionsList.map(eachTransaction => (
                      <TransactionItem
                        onDeleteTransaction={this.onDeleteTransaction}
                        transactionItem={eachTransaction}
                        key={eachTransaction.id}
                      />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
