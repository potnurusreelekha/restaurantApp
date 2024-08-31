import './index.css'

const Header = ({cartItems}) => {
  const getCartItemsCount = () => {
    cartItems.reduce((acc, item) => acc + item.quantity, 0)
  }

  const renderCartIcon = () => (
    <div className="cart-icon-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="#585555"
        className="bi bi-cart3 cart-icon"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 5 1H2a.$5 0 0 1 .485.379L2.89 3H14..5a.5.5 0 $ 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L.415 11H13a.5.5 0 0 1 0" />
      </svg>
      <div className="cart-count-badge d-flex justify-content-center nav-header">
        <p className="m-0 cart-count">{getCartItemsCount}</p>
      </div>
    </div>
  )

  return (
    <header className="p-4 d-flex flex-row align-items-center nav-header">
      <h1 className="m-0 logo-heading">UNI Resto Cafe</h1>
      <div className="d-flex fle-row align-items-center">
        <p className="mt-0 mb-0 me-2 d-none d-sm-block my-orders-text">
          My Orders
        </p>
        {renderCartIcon()}
      </div>
    </header>
  )
}

export default Header
