import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      return (
        <>
          <div className="summary-container">
            <h1 className="summary-heading">
              Order Total:{' '}
              <span className="total">
                Rs {cartList.reduce((a, b) => a + b.quantity * b.price, 0)}/-
              </span>
            </h1>
            <p className="summary-para">{cartList.length} Items in Cart</p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button-sm">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
