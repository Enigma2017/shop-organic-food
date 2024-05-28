import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import cartStore from '../../stores/CartStore';

export const Cart = observer(() => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    cartStore.clearCart()
  };

  if (isSubmitted) {
    return (
      <section className='cart'>
        <div className='cart-container'>
          <h2>Thank you for your order!</h2>
          <p>You will receive an email confirmation shortly.</p>
        </div>
      </section>
    );
  } else {
      return (
        <section className='cart'>
          <div className='cart-container'>
            <h2>Shopping Cart</h2>
            <ul>
              {cartStore.items.map(item => (
                <li key={item.id}>
                  <img src={item['image-card'].src} alt={item['image-card'].alt} />
                  <span>{item.quantity}</span>
                  <span>x</span>
                  <span>{`$${item.price.discountprice}`}</span>
                  <span>=</span>

                  <span>{`$${cartStore.getTotalPriceForItem(item.id)}`}</span>
                  <button onClick={() => cartStore.plusItem(item.id)}>+</button>
                  <button onClick={() => cartStore.minusItem(item.id)}>-</button>
                  <button onClick={() => cartStore.removeItem(item.id)}>X</button>
                </li>
              ))}
            </ul>
            <div>Total Items: {cartStore.totalItems}</div>
            <div>Total Price: {`$${cartStore.totalPrice}`}</div>
            <div></div>
            <button onClick={() => handleSubmit()}>Clear Cart</button>
          </div>
        </section>
      );
  }
});
