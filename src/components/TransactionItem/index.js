// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionItem, onDeleteTransaction} = props
  const {id, titleInput, amountInput, type} = transactionItem
  const onDelete = () => {
    onDeleteTransaction(id)
  }
  return (
    <li className="list">
      <p className="title-1">{titleInput}</p>
      <p className="amount-1">{amountInput}</p>
      <p className="type-1">{type}</p>
      <button data-testid="delete" onClick={onDelete} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="img"
        />
      </button>
    </li>
  )
}
export default TransactionItem
